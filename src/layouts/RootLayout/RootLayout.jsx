import React from 'react';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
	return (
		<>
			<h1>hello from nav</h1>
			<Outlet />
		</>
	);
};

export default RootLayout;
