import React from 'react';

const SplitScreen = ({ children, leftWeight = 1, rightWeight = 1 }) => {
    const [left, right] = children;
    return (
        <section className='is-flex p-3 m-2'>
            <div className={`is-flex-grow-${leftWeight}`}>{left}</div>
            <div className={`is-flex-grow-${rightWeight} has-background-red`}>
                {right}
            </div>
        </section>
    );
};

export default SplitScreen;
