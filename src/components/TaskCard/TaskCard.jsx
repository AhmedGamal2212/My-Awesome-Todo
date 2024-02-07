import React from 'react';

const TaskCard = ({ task }) => {
    return (
        <div
            style={{
                margin: '1rem',
                border: '1px solid #e1e1e1',
                padding: '0.8rem',
                color: 'white',
            }}
        >
            <div>{task.title}</div>
            <div>{task.description}</div>
            <div>{task.priority}</div>
            <div>{task.dueDate}</div>
            <div>{task.status ? 'done' : 'todo'}</div>
        </div>
    );
};

export default TaskCard;
