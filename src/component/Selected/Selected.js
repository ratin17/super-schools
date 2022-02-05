import React from 'react';
import Squad from '../Squad/Squad';
import './Selected.css';

const Selected = (props) => {
    const { selected } = props;
    let totalStudents = 0;
    console.log(selected);
    selected.forEach(school => {
        totalStudents += school.students;
    });
    return (
        <div className='my-squad'>
            <div className='squad-head'>
                <h2>My School-Squad</h2>
                <h3>Selected Schools : {selected.length}</h3>
                <h3>Total Students : {totalStudents}</h3>
            </div>
            <hr />
            {
                selected.map(school =>
                    <Squad
                        key={school.id}
                        name={school.name}
                        image={school.image}
                    >
                    </Squad>
                )
            }

        </div>
    );
};

export default Selected;