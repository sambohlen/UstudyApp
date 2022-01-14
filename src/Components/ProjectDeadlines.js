import { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  collection,
  getDocs,
} from "firebase/firestore";

function Deadline() {
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "modules")

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
        };

        getUsers()
    }, [])
    return (
    <div className="DeadlineShowcase">
        {users.map((user) => {
            return (
                <div>
                    <div className="deadlines-box" id="deadlines-box1">
                        <h1>{user.name} - {user.date}</h1>
                    </div>
                </div>
            )
        })}
    </div>
    )
}

export default Deadline;

 