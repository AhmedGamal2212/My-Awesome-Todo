import {
    faClipboardList,
    faCheckDouble,
    faPen,
    faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import style from './TaskCard.module.css';

const TaskCard = ({
    task: { title, description, priority, dueDate, status },
}) => {
    return (
        <div
            className={`card m-1 has-background-white-ter has-text-white p-1 ${style.card}`}
        >
            <div className='card-content'>
                <div className='media'>
                    <div className='media-content'>
                        <p className='title is-3'>{title}</p>
                        <div className='is-flex is-align-items-baseline'>
                            <div
                                className={`tag mr-4 ${
                                    priority === 'H'
                                        ? 'is-danger'
                                        : 'is-warning'
                                }`}
                            >
                                {priority === 'H' ? 'High' : 'Low'}
                            </div>
                            <p className='subtitle is-7 has-text-grey'>
                                Due: {dueDate}
                            </p>
                        </div>
                    </div>
                </div>
                <div className='content is-size-6 has-text-grey-dark'>
                    {description}
                </div>
            </div>
            <div className='card-footer has-background-black-ter'>
                <div className={`card-footer-item ${style.icon}`}>
                    <span
                        className={`icon ${status ? 'has-text-success' : ''}`}
                    >
                        <FontAwesomeIcon
                            icon={status ? faCheckDouble : faClipboardList}
                            data-testid={
                                status ? 'task-done-icon' : 'pending-icon'
                            }
                        />
                    </span>
                </div>
                <div className={`card-footer-item ${style.icon}`}>
                    <span className={`icon`}>
                        <FontAwesomeIcon
                            icon={faPen}
                            data-testid='edit-icon'
                        />
                    </span>
                </div>
                <div className={`card-footer-item ${style.icon}`}>
                    <span className={`icon`}>
                        <FontAwesomeIcon
                            icon={faTrash}
                            data-testid='delete-icon'
                        />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;
