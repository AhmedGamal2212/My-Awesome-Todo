import React, { useState, useEffect } from 'react';
import { secondsToMilliseconds } from '../../utilities';
import { INITIAL_INSPIRATIONAL_QUOTE } from '../../constants';
import Quote from './Quote';

const QuoteContainer = ({ useQuote }) => {
    const [quote, setQuote] = useState(INITIAL_INSPIRATIONAL_QUOTE);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const newQuote = useQuote();
            setQuote(newQuote);
        }, secondsToMilliseconds(5));
        return () => clearInterval(intervalId);
    }, []);

    return <Quote quoteDetails={quote} />;
};

export default QuoteContainer;
