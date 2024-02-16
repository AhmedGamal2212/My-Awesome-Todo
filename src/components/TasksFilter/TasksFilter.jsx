import React from 'react';
import style from './FilterButton.module.css'

const TasksFilter = ({text, action}) => {
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
