import React, { useState } from 'react';
import TasksFilter from '../TasksFilter';
import { FILTERS_ACTIONS, FILTERS_TEXT } from '../../constants';
import style from './TaskFilters.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const TaskFilters = () => {
    const [selected, setSelected] = useState(FILTERS_TEXT[0]);
    const [visible, setVisible] = useState(false);

    const toggleDropdown = () => {
        setVisible(!visible);
    };

    const handleSelect = (option, action) => {
        setSelected(option);
        setVisible(false);
        action();
    };

    const tasksFilters = [];
    for (let i = 0; i < FILTERS_ACTIONS.length; i++) {
        tasksFilters.push(
            <TasksFilter
                text={FILTERS_TEXT[i]}
                action={() => handleSelect(FILTERS_TEXT[i], FILTERS_ACTIONS[i])}
                key={i}
                selected={selected}
            />
        );
    }
    return (
        <div
            className={`dropdown is-primary is-active ${style.filtersContainer}`}
        >
            <div
                className={`dropdown is-active`}
                onClick={toggleDropdown}
            >
                <div className={`dropdown-trigger`}>
                    <button
                        className='button is-success has-text-weight-bold'
                        aria-haspopup='true'
                        aria-controls='dropdown-menu'
                    >
                        <span>{selected}</span>
                        <span className='icon is-small'>
                            <FontAwesomeIcon icon={faAngleDown} />
                        </span>
                    </button>
                </div>
                <div
                    className='dropdown-menu'
                    id='dropdown-menu'
                    role='menu'
                    style={{ display: visible ? 'block' : 'none' }}
                    data-testid="dropdown-menu"
                >
                    <div className='dropdown-content'>{tasksFilters}</div>
                </div>
            </div>
        </div>
    );
};

export default TaskFilters;
