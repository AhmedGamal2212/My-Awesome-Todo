import React from 'react';

const FilterButton = ({ text, action }) => {
    return (
        <button
            className='button is-primary is-fullwidth'
            onClick={action}
        >
            {text}
        </button>
    );
};

export default FilterButton;
