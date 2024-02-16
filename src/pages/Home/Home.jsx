import React from 'react';
import {useRandomInspirationalQuote} from '../../hooks/useRandomInspirationalQuote';
import QuoteContainer from '../../components/Quote/QuoteContainer';
import AddTaskForm from '../../components/AddTaskForm';
import SplitScreen from '../../components/SplitScreen';
import {useTasksContext} from '../../context/TasksContext';
import RegularItemsListContainer from '../../components/RegularItemsList';
import TaskFilters from '../../components/TaskFilters';

const Home = () => {
    const leftPaneWidthInRatio = 3;
    const rightPaneWidthInRatio = 1;
    return (
        <div className='is-fh'>
            <QuoteContainer useQuote={useRandomInspirationalQuote}/>
            <AddTaskForm/>
            <SplitScreen
                leftWeight={leftPaneWidthInRatio}
                rightWeight={rightPaneWidthInRatio}
            >
                <RegularItemsListContainer useItemsData={useTasksContext}/>
                <TaskFilters/>
            </SplitScreen>
        </div>
    );
};

export default Home;
