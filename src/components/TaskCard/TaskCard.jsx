import {
    faClipboardList,
    faCheckDouble,
    faPen,
    faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';

const TaskCard = ({ task }) => {
    const { title, description, priority, dueDate, status } = task;
    return (
        <div className='card m-1 has-background-black-ter has-text-white p-1'>
            <div className='card-content'>
                <div className='media'>
                    <div className='media-content'>
                        <p className='title is-4 has-text-white'>{title}</p>
                        <div className='is-flex'>
                            <div
                                className={`tag mr-4 ${
                                    priority === 'H'
                                        ? 'is-danger'
                                        : 'is-warning'
                                }`}
                            >
                                {priority === 'H' ? 'High' : 'Low'}
                            </div>
                            <p className='subtitle is-7 has-text-grey-light'>
                                Due: {dueDate}
                            </p>
                        </div>
                    </div>
                </div>
                <div className='content is-small'>{description}</div>
            </div>
            <div className='card-footer'>
                <div className={`card-footer-item`}>
                    <span
                        className={`icon ${status ? 'has-text-success' : ''}`}
                    >
                        {status ? (
                            <FontAwesomeIcon
                                icon={faCheckDouble}
                                data-testid='task-done-icon'
                            />
                        ) : (
                            <FontAwesomeIcon
                                icon={faClipboardList}
                                data-testid='pending-icon'
                            />
                        )}
                    </span>
                </div>
                <div className='card-footer-item'>
                    <span className='icon'>
                        <FontAwesomeIcon
                            icon={faPen}
                            data-testid='edit-icon'
                        />
                    </span>
                </div>
                <div className='card-footer-item'>
                    <span className='icon'>
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
