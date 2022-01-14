import React from 'react';
import { Link } from "react-router-dom";
import errorImg from '../assets/404error.png';

const NotFound = () => {
    return (
        <section className='not-found'>
            <img src={errorImg} alt='errorImage' className='error-image'/>
            <h2>Sorry</h2>
            <p>That page cannot be found</p> 
            <p><Link to="/login">Back to login...</Link></p>
        </section>
    )
}

export default NotFound; 
