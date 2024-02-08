import React from 'react';
import FilterButton from '../FilterButton';
import { FILTERS_TEXT, FILTERS_ACTIONS } from '../../constants';
import style from './TaskFilters.module.css'

const TaskFilters = () => {
    const buttonsList = [];
    for (let i = 0; i < FILTERS_ACTIONS.length; i++) {
        buttonsList.push(
            <FilterButton
                text={FILTERS_TEXT[i]}
                action={FILTERS_ACTIONS[i]}
                key={i}
            />
        );
    }
    return <div className={`buttons ${style.buttonsContainer} is-display-none`}>{buttonsList}</div>;
};

export default TaskFilters;
