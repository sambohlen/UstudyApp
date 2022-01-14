import { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

function Hours() {
    const [users, setUsers] = useState([]);
    const hoursCollectionRef = collection(db, "hours")

    const deleteLog = async (id) => {
        const userDoc = doc(db, "hours", id);
        await deleteDoc(userDoc);
      };

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(hoursCollectionRef);
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
        };

        getUsers()
    }, [])
    return (
    <div className="HoursShowcase">
        {users.map((user) => {
            return (
                <div>
                    <div className="hours-modules-box" id="hours-module-box1">
                        <p>Date Logged: {user.date}</p>
                        <h1>You worked for {user.hours} hours!</h1>
                        <button
                            className="delete-log"
                            onClick={() => {
                            deleteLog(user.id)
                        }}
                        >
                            Delete Log
                        </button>
                    </div>
                </div>
            )
        })}
    </div>
    )
}

export default Hours;