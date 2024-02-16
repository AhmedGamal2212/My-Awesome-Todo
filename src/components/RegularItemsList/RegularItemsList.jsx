import React from 'react';
import TaskCard from '../TaskCard/TaskCard';

const RegularItemsList = ({items}) => {
    return (
        <div className='is-flex is-flex-wrap-wrap p-4 is-justify-content-center'>
            {items.map((item, idx) => {
                return (
                    <TaskCard
                        key={idx}
                        task={item}
                    />
                );
            })}
        </div>
    );
};

export default RegularItemsList;
