import React from 'react';

const FilterButton = ({ text, action }) => {
    return (
        <button
            className='button is-success is-fullwidth has-text-weight-bold is-inverted is-outlined has-background-black-bis'
            onClick={action}
        >
            {text}
        </button>
    );
};

export default FilterButton;
