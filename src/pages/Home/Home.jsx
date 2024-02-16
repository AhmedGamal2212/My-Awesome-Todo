import React from 'react';
import { useRandomInspirationalQuote } from '../../hooks/useRandomInspirationalQuote';
import QuoteContainer from '../../components/Quote/QuoteContainer';
import AddTaskForm from '../../components/AddTaskForm';
import { useTasksContext } from '../../context/TasksContext';
import RegularItemsListContainer from '../../components/RegularItemsList';
import TaskFilters from '../../components/TaskFilters';

const Home = () => {
    return (
        <div
            className='is-fh'
            style={{ position: 'relative' }}
        >
            <QuoteContainer useQuote={useRandomInspirationalQuote} />
            <AddTaskForm />
            <TaskFilters />
            <RegularItemsListContainer useItemsData={useTasksContext} />
        </div>
    );
};

export default Home;
