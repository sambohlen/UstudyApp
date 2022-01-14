import { useState, useEffect } from "react";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import { db } from "../firebase";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

const Edit = (props) => {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "modules")

  const deleteUser = async (id) => {
    const userDoc = doc(db, "modules", id);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
      const getUsers = async () => {
          const data = await getDocs(usersCollectionRef);
          setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
      };

      getUsers()
  }, []);

  return (
  <div className="EditShowcase">
      <div className='edit-modules-heading'>
      <Link to='/' className='delete-project-icon'>
            <AiIcons.AiOutlineArrowLeft />
          </Link>
        <h1>Delete Projects</h1>
      </div>
      {users.map((user) => {
          return (
              <div>
                <div className="project-title">
                  <h1>{user.name}</h1>
                  </div>
                  <button
                    className="delete-button"
                    onClick={() => {
                      deleteUser(user.id)
                    }}
                  >
                    Delete Project
                  </button>
              </div>
          )
      })}
  </div>
  )
};

export default Edit;