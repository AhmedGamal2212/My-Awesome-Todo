import React from 'react';

const Quote = ({ quoteDetails }) => {
    const { quote, author } = quoteDetails;
    return (
        <div className='container mt-4 p-3 is-fluid'>
            <div class='box p-1'>
                <div className='has-text-weight-bold notification is-success has-text-centered'>
                    <span className='is-size-5-desktop is-block'>"{`${quote}`}"</span>
                    <span className='is-size-5 is-italic'>- {`${author}`}</span>
                </div>
            </div>
        </div>
    );
};

export default Quote;
