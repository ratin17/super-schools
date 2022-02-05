import React from 'react';
import './Squad.css'

const Squad = (props) => {
    const { name, image } = props;
    return (
        <div className='squad-design'>
            <h5>{name}</h5>
            <img src={image} alt="" />
        </div>
    );
};

export default Squad;
