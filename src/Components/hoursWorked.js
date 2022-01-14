import { useState } from "react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
} from "firebase/firestore";

function HoursWorked() {

    const [hoursWorked, setHoursWorked] = useState("0");

    const hoursCollectionRef = collection(db, "hours")

    const addHours = async (e) => {
        e.preventDefault();
        await addDoc(hoursCollectionRef, { hours: hoursWorked});
     
    };
    return (
        <section className='hours-form'>
            <form className="add">
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
            <button onClick={addHours}className="form-input-btn" type="submit">Confirm Hours</button>
            </form>

        </section>

    )
};

export default HoursWorked;