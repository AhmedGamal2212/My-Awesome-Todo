import React from 'react';
import { useRandomInspirationalQuote } from '../../hooks/useRandomInspirationalQuote';
import QuoteContainer from '../../components/Quote/QuoteContainer';
import AddTaskForm from '../../components/AddTaskForm';

const Home = () => {
    return (
        <div className='is-fh'>
            <QuoteContainer useQuote={useRandomInspirationalQuote} />
            <AddTaskForm />
        </div>
    );
};

export default Home;
