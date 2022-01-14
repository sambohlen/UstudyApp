import React, { useState } from "react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
} from "firebase/firestore";
import Stopwatch from "../Components/Stopwatch";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function HoursWorked() {

    const [hoursWorked, setHoursWorked] = useState("0");
    const [todayDate, setTodayDate] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const hoursCollectionRef = collection(db, "hours")

    const addHours = async (e) => {
        e.preventDefault();
    try{
        await addDoc(hoursCollectionRef, { hours: hoursWorked, date: todayDate});
        navigate("/");
    } catch(err) {
        setError("There was an Error, please try again");
      }
     
    };
    return (
        <div className='timerSection'>
         <div className='timer-modules-heading'>
      <Link to='/' className='delete-project-icon'>
            <AiIcons.AiOutlineArrowLeft />
          </Link>
          </div>
         <div className="form">
          <div className="timer-form-container">
            <form className="add">
            <p className='errorMessage'>{error}</p>
            <div className='form-inputs'>
                <label className='form-label'>How many hours have you done today?</label>
                <input
                    id="answer"
                    type="number"
                    name="hours"
                    required
                    autoFocus
                    onChange={(event) => {
                    setHoursWorked(event.target.value);
                }}
                />
            </div>
            <div className='form-inputs'>
                <label className='form-label'>Todays Date</label>
                <input
                    id="answer"
                    type="date"
                    name="date"
                    required
                    autoFocus
                    onChange={(event) => {
                    setTodayDate(event.target.value);
                }}
                />
            </div>
            <button onClick={addHours}className="form-input-btn" type="submit">Confirm Hours</button>
            </form>
            </div>
            </div>
            <div className="timer">
                <Stopwatch />
            </div>
        </div>
    )
};

export default HoursWorked;
