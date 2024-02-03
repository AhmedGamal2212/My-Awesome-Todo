import React from 'react';

const Quote = ({ quoteDetails }) => {
    const { quote, author } = quoteDetails;
    return <div>{`${quote} - ${author}`}</div>;
};

export default Quote;
