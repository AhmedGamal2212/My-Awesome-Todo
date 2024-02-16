import React from 'react';
<<<<<<< HEAD
import TasksFilter from '../TasksFilter';
import { FILTERS_ACTIONS, FILTERS_TEXT } from '../../constants';
import style from './TaskFilters.module.css';
=======
import FilterButton from '../FilterButton';
import { FILTERS_TEXT, FILTERS_ACTIONS } from '../../constants';
import style from './TaskFilters.module.css'
>>>>>>> parent of 26d642f (reformat project files using jetbrains editor)

const TaskFilters = () => {
    const buttonsList = [];
    for (let i = 0; i < FILTERS_ACTIONS.length; i++) {
        buttonsList.push(
            <TasksFilter
                text={FILTERS_TEXT[i]}
                action={FILTERS_ACTIONS[i]}
                key={i}
            />
        );
    }
    return (
        <div className={`buttons ${style.buttonsContainer}`}>
            <div className='dropdown is-active'>
                <div className='dropdown-trigger'>
                    <button
                        className='button'
                        aria-haspopup='true'
                        aria-controls='dropdown-menu'
                    >
                        <span>Dropdown button</span>
                        <span className='icon is-small'>
                            <i
                                className='fas fa-angle-down'
                                aria-hidden='true'
                            ></i>
                        </span>
                    </button>
                </div>
                <div
                    className='dropdown-menu'
                    id='dropdown-menu'
                    role='menu'
                >
                    <div className='dropdown-content'></div>
                </div>
            </div>
        </div>
    );
};

export default TaskFilters;
