import { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  collection,
  getDocs,
} from "firebase/firestore";
import { Link } from "react-router-dom";

function Cards() {
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
    <div className="CardShowcase">
        {users.map((user) => {
            return (
                <div>
                    <div className="modules-box" id="module-box1">
                        <h1>{user.name}</h1>
                        <Link to="/timer"><p className="timerButton">Start Timer</p></Link>
                    </div>
                </div>
            )
        })}
                <Link to="/createproject" className="modules-box-empty-link">
                <div className="modules-box-empty">
                    <h1>Add a project...</h1>
                </div> </Link>   
    </div>
    )
}

export default Cards;
