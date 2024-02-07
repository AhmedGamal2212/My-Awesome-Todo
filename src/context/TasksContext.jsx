import React, { createContext, useContext, useState } from 'react';
import useTasksList from '../hooks/useTasksList';

const TasksContext = createContext(undefined);

const TasksContextProvider = ({ children }) => {
    const tasksList = useTasksList();

    return (
        <TasksContext.Provider
            value={{
                tasksList,
            }}
        >
            {children}
        </TasksContext.Provider>
    );
};

const useTasksContext = () => {
    const context = useContext(TasksContext);
    if(context === undefined) {
        throw new Error('wrong provider wrapping!');
    }
    return context;
}

export default TasksContextProvider;
export {useTasksContext};