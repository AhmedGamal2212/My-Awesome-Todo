import React from 'react';

const AddTaskForm = () => {
    return (
        <div className='columns'>
            <div className='box control has-border-white column is-half is-offset-one-quarter has-background-black is-flex is-justify-content-center is-align-items-center has-text-white is-three-fifths-mobile is-offset-one-fifth-mobile'>
                <input type="text" className='input' placeholder="Add a new task..." />
                <button className='button is-success' type='submit'>+</button>
            </div>
        </div>
    );
};

export default AddTaskForm;
