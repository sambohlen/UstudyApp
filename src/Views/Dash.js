import React from "react";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";

import Deadlines from "../Components/ProjectDeadlines";
import Cards from "../Components/cards";
import Hours from "../Components/hours";


const Dash = () => {
  const { logOut } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <section className='Dash'>
      <div className="Hero">
        <h1><span>U</span>Study</h1>
        <div className="LogOutButton">
          <button onClick={handleLogout}>Log out</button>
        </div>
      </div>
      <div className='create-modules-heading'>
        <h1>Course Modules</h1>
          <Link to='/createproject' className='create-project-icon'>
            <AiIcons.AiOutlinePlus />
          </Link>
      </div>
      <div className="card-section">
        <Cards />
      </div>
      <div className="histogram-section">
        <div className='create-modules-heading'>
          <h1>Recent Hours Uploaded</h1>
          <Link to='/timer' className='timer-icon'>
            <BiIcons.BiTimer/>
          </Link>
        </div>
          <Hours />
        </div>
      <div className="projectDeadlines-section">
        <div className='create-modules-heading'>
          <h1>Project Deadlines</h1>
            <Link to='/createproject' className='create-project-icon'>
              <AiIcons.AiOutlinePlus />
            </Link>
        </div>
        <div className="deadlines-section">
        <Deadlines />
      </div>
        <div className="projects">
        </div>
      </div>
    </section>
  );
};

export default Dash;