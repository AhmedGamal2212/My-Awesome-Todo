import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import {BASE_URL} from './constants';
import RootLayout from './layouts/RootLayout';
import SingleTask from './pages/SingleTask';
import Landing from './pages/Landing';

function App() {
    return (
        <div
            data-testid='app'
            className='is-fh has-background-black-bis'
        >
            <Routes>
                <Route
                    path={`${BASE_URL}/`}
                    element={<RootLayout/>}
                >
                    <Route
                        path=''
                        element={<Landing/>}
                    />
                    <Route path={`tasks`}>
                        <Route
                            path=''
                            element={<Home/>}
                        />
                        <Route
                            path=':id'
                            element={<SingleTask/>}
                        />
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
