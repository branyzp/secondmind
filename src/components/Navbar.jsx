import React from 'react';
import LightSwitch from './LightSwitch';

const navBarArr = ['resources', 'login', 'register'];
const authNavBarArr = ['dashboard', 'user', 'logout'];

function Navbar() {
	return (
		<div>
			<LightSwitch />
		</div>
	);
}

export default Navbar;
