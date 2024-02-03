import React from 'react';

const Quote = ({ quoteDetails }) => {
    const { quote, author, source } = quoteDetails;
    return <div>{`${quote} - ${author} - ${source}`}</div>;
};

export default Quote;
