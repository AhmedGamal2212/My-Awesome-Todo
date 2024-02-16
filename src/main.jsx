import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {QueryClient, QueryClientProvider} from 'react-query';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import 'bulma/css/bulma.css';
import TasksContextProvider from './context/TasksContext.jsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <TasksContextProvider>
            <Router basename={`/`}>
                <QueryClientProvider client={queryClient}>
                    <App/>
                </QueryClientProvider>
            </Router>
        </TasksContextProvider>
    </React.StrictMode>
);
