import { useState, useRef } from "react";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import { db } from "../firebase";
import {
  collection,
  addDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function CreateProject() {
    
    const [newProject, setNewProject] = useState("");
    const [newDate, setNewDate] = useState("");
    const navigate = useNavigate();

    const usersCollectionRef = collection(db, "modules")

    const addProject = async (e) => {
        e.preventDefault();
        await addDoc(usersCollectionRef, { name: newProject, date: newDate});
        navigate("/");

        
    };
return (
    <section className='create-form'>
      <div className='edit-modules-heading'>
      <Link to='/' className='delete-project-icon'>
            <AiIcons.AiOutlineArrowLeft />
          </Link>
        <h1>Create a project</h1>
      </div>
        <div className='form-container'>
            <form className="add">
            <div className='form-inputs'>
                <label className='form-label'>Project Name</label>
                <input
                id="answer"
                type="text"
                name="name"
                required
                autoFocus
                onChange={(event) => {
                    setNewProject(event.target.value);
                }}
                />
            </div>
            <div className='form-inputs'>
                <label className='form-label'>Description (optional)</label>
                <input
                id="answer"
                type="text"
                name="description"
                />
            </div>
            <div className='form-inputs'>
                <label className='form-label'>Due Date</label>
                <input
                id="answer"
                type="date"
                name="date"
                required
                autoFocus
                onChange={(event) => {
                    setNewDate(event.target.value);
                }}
                />
            </div>
            <button 
                onClick={addProject}
                className="form-input-btn" 
                type="submit"
                >Add project
            </button>
            </form>
        </div>
    </section>
    )
}

export default CreateProject;