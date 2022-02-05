import React from 'react';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble, f09a } from '@fortawesome/free-solid-svg-icons'
import './Schooll.css';

const School = (props) => {
    const { image, name, students, location, rating, board, estd } = props.school;
    return (
        <div className='school-design'>
            <img src={image} alt="" />
            <Rating quiet readonly initialRating={rating}></Rating>
            <h3>{name}</h3>
            <p>from <b>{estd}</b></p>
            <p>at <b>{location}</b></p>
            <p> with <b>{students} </b> students</p>
            <p> under <b>{board} </b> education board</p>
            <button className='btn-add' onClick={() => { props.handleSelected(props.school) }} > <FontAwesomeIcon icon={faCheckDouble} /> Add to the SQUAD</button>
        </div>
    );
};

export default School;