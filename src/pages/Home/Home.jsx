import React from 'react';
import { useRandomInspirationalQuote } from '../../hooks/useRandomInspirationalQuote';
import QuoteContainer from '../../components/Quote/QuoteContainer';

const Home = () => {
    return (
        <>
            <QuoteContainer useQuote={useRandomInspirationalQuote} />
        </>
    );
};

export default Home;
