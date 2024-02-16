import React from 'react';
import style from './TaskFilter.module.css';

const TasksFilter = ({ text, action, selected }) => {
    return (
        <a
            href='#'
            className={`dropdown-item has-text-centered has-text-weight-bold ${selected === text ? `is-active ${style.isActive}` : ''}`}
            onClick={action}
        >
            {text}
        </a>
    );
};

export default TasksFilter;
