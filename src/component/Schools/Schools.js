import React, { useEffect, useState } from 'react';
import School from '../School/School';
import Selected from '../Selected/Selected';
import './School.css';


const Schools = () => {

    const [schools, setSchools] = useState([]);
    const [selected, setSelected] = useState([]);

    useEffect(
        () => {
            fetch('./fakeDB.JSON')
                .then(res => res.json())
                .then(data => setSchools(data));
        }
        , []);

    const handleSelected = (school) => {
        const afterClick = [...selected, school];
        setSelected(afterClick)
    }

    return (
        <div className='schools-design'>
            <div className='school'>
                {
                    schools.map(school =>
                        <School
                            key={school.id}
                            school={school}
                            handleSelected={handleSelected}
                        >
                        </School>
                    )
                }
            </div>

            <div className='selected'>
                <Selected selected={selected}></Selected>
            </div>

        </div>
    );
};

export default Schools;