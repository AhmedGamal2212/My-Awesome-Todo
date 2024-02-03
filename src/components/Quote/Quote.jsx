import React from 'react';

const Quote = ({ quoteDetails }) => {
    const { quote, author } = quoteDetails;
    return (
        <div className='container mt-4 p-3 is-fluid'>
            <div class='box p-1'>
                <div className='has-text-weight-bold notification is-success has-text-centered'>
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
        </div>
    );
};

export default Quote;
