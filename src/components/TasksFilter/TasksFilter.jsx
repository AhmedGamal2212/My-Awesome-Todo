import React from 'react';
import style from './FilterButton.module.css'

<<<<<<< HEAD:src/components/TasksFilter/TasksFilter.jsx
const TasksFilter = ({text, action}) => {
=======
const FilterButton = ({ text, action }) => {
>>>>>>> parent of 26d642f (reformat project files using jetbrains editor):src/components/FilterButton/FilterButton.jsx
    return (
        <button
            className={`button is-success is-fullwidth has-text-weight-bold is-inverted is-outlined has-background-black-bis ${style.btn}`}
            onClick={action}
        >
            {text}
        </button>
    );
};

export default TasksFilter;
