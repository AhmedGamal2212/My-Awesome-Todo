import React from 'react';
import { useRandomInspirationalQuote } from '../../hooks/useRandomInspirationalQuote';
import QuoteContainer from '../../components/Quote/QuoteContainer';
import AddTaskForm from '../../components/AddTaskForm';
import SplitScreen from '../../components/SplitScreen';
import { useTasksContext } from '../../context/TasksContext';
import RegularItemsListContainer from '../../components/RegularItemsList';

const Home = () => {
    const leftPaneWidthInRatio = 2;
    const rightPaneWidthInRatio = 1;
    return (
        <div className='is-fh'>
            <QuoteContainer useQuote={useRandomInspirationalQuote} />
            <AddTaskForm />
            <SplitScreen
                leftWeight={leftPaneWidthInRatio}
                rightWeight={rightPaneWidthInRatio}
            >
                <RegularItemsListContainer useItemsData={useTasksContext} />
                <div className='is-flex is-flex-wrap-wrap is-flex-direction-column' style={{
                    minWidth: '300px'
                }}>
                    {Array(7)
                        .fill(0)
                        .map((x) => (
                            <div
                                style={{
                                    padding: '0.5rem',
                                    margin: '0.5rem',
                                    color: 'white',
                                    border: '1px solid #e1e1e1',
                                }}
                            >
                                box box box box box{' '}
                            </div>
                        ))}
                </div>
            </SplitScreen>
        </div>
    );
};

export default Home;
