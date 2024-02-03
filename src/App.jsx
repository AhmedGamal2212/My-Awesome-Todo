import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { BASE_URL } from './constants';
import RootLayout from './layouts/RootLayout';
import SingleTask from './pages/SingleTask';

function App() {
    return (
        <div data-testid='app'>
            <Routes>
                <Route
                    path={`${BASE_URL}`}
                    element={<RootLayout />}
                >
                    <Route
                        path=''
                        element={<h1>landing page</h1>}
                    />
                    <Route path='tasks'>
                        <Route
                            path=''
                            element={<Home />}
                        />
                        <Route
                            path=':id'
                            element={<SingleTask />}
                        />
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
