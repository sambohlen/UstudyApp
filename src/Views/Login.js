import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import logo from '../assets/welcomeLogo.png';
import {useUserAuth} from '../context/UserAuthContext';

function Login (props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();


    const { logIn, googleSignIn } = useUserAuth();
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("")
      try {
        await logIn(email, password);
        navigate("/");
      }catch (err) {
        setError(err.message);
      }
    }
    const handleGoogleSignIn = async (e) => {
      e.preventDefault();

      try {
        await googleSignIn();
        navigate("/")
      } catch(err) {
        setError(err.message);
      }
    };
  return (
    <section className='login'> 
        <img src={logo} alt='Logo' className='form-logo'/>
        <h2 className='joinHeadings' >LOGIN WITH</h2>
        <div className='social-container' id="socialIconBox">
            <SocialIcon
            network="google"
            onClick={handleGoogleSignIn}
            />
        </div>
        <h2 className='loginHeadings' >OR VIA EMAIL</h2>
        <div class="FormOpen">
            <button class="FormOpenBtn" onClick={()=>setShow(!show)} >Email</button>
            {
            show?<div className='form-container'>
              <p className='errorMessage'>{error}</p>
              <form onSubmit={handleSubmit} >
                <div className='form-inputs'>
                <label className='form-label'>Email</label>
                <input
                type="email"
                placeholder="Email Address" 
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
                <div className='form-inputs'>
                    <label className='form-label'>Password</label>
                    <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                  <button 
                  class="form-input-btn"
                  type="submit"
                >
                    Log in
                  </button>
                </form>
            </div>:null
            }
            <div className="form-input-login">
            <h2>Not created an account? <Link to="/join">Sign up here</Link></h2>
            </div>
        </div>
    </section>

)
}

export default Login;