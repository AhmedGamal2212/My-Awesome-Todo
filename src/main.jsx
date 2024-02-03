import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { QueryClient, QueryClientProvider } from 'react-query';
import { HashRouter as Router } from 'react-router-dom';
import './index.css';
import 'bulma/css/bulma.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <QueryClientProvider client={queryClient}>
                <App />
            </QueryClientProvider>
        </Router>
    </React.StrictMode>
);
