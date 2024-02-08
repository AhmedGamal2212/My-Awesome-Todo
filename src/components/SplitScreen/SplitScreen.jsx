import React from 'react';
import style from './SplitScreen.module.css';

const SplitScreen = ({ children, leftWeight = 1, rightWeight = 1 }) => {
    const [left, right] = children;
    return (
        <section className='is-flex is-justify-content-center is-mobile pl-5'>
            <div className='is-four-fifth is-two-thirds-desktop'>{left}</div>
            <div className={`column is-one-fifth is-one-third-desktop ${style.right}`}>
                {right}
            </div>
        </section>
    );
};

export default SplitScreen;
