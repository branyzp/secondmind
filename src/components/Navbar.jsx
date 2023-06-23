import React from 'react';
import LightSwitch from './LightSwitch';
import { AppBar } from '@mui/material';

const navBarArr = ['resources', 'login', 'register'];
const authNavBarArr = ['dashboard', 'user', 'logout'];

function Navbar() {
	return (
		<AppBar color="primary">
			<div className="flex flex-row justify-between">
				<h1 className="">Hi</h1>
				<h1 className="">Hi</h1>
				<LightSwitch />
			</div>
		</AppBar>
	);
}

export default Navbar;
