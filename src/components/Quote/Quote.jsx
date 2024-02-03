import React from 'react';

const Quote = ({ quoteDetails }) => {
    const { quote, author } = quoteDetails;
    return (
        <div className='container mt-4 p-4 is-fluid'>
            <div className='has-text-white has-text-weight-bold has-text-centered'>
                <span
                    className='is-size-5-desktop is-size-6-mobile is-block'
                    data-testid='inspirational-quote-text'
                >
                    "{`${quote}`}"
                </span>
                <span
                    className='is-size-6-desktop is-size-7-mobile is-italic'
                    data-testid='inspirational-quote-author'
                >
                    - {`${author}`}
                </span>
            </div>
        </div>
    );
};

export default Quote;
