import React from 'react';
import { useRandomInspirationalQuote } from '../../hooks/useRandomInspirationalQuote';
import QuoteContainer from '../../components/Quote/QuoteContainer';

const Home = () => {
    return (
        <div className='is-fh has-background-dark'>
            <QuoteContainer useQuote={useRandomInspirationalQuote} />
        </div>
    );
};

export default Home;
