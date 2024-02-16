import React, {useEffect, useState} from 'react';
import {secondsToMilliseconds} from '../../utilities';
import {INITIAL_INSPIRATIONAL_QUOTE, QUOTES_VIEW_TIME_IN_SECONDS} from '../../constants';
import Quote from './Quote';

const QuoteContainer = ({useQuote}) => {
    const [quote, setQuote] = useState(INITIAL_INSPIRATIONAL_QUOTE);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const newQuote = useQuote();
            setQuote(newQuote);
        }, secondsToMilliseconds(QUOTES_VIEW_TIME_IN_SECONDS));
        return () => clearInterval(intervalId);
    }, []);

    return <Quote quoteDetails={quote}/>;
};

export default QuoteContainer;
