import React from 'react';

const SplitScreen = ({ children, leftWeight = 1, rightWeight = 1 }) => {
    const [left, right] = children;
    return (
        <section className="is-flex is-justify-content-center is-mobile">
            <div className="is-four-fifth is-two-thirds-desktop">{left}</div>
            <div className="column is-one-fifth is-one-third-desktop">{right}</div>
        </section>
    );
};

export default SplitScreen;
