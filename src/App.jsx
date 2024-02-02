import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { BASE_URL } from './constants';

function App() {
	return (
		<>
			<Routes>
				<Route path={`${BASE_URL}`}>
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
							element={<h1>single task page</h1>}
						/>
					</Route>
				</Route>
			</Routes>
		</>
	);
}

export default App;
