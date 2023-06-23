import React, { useContext } from 'react';
import { DarkModeContext } from '../hooks/DarkModeContext';
import LightSwitch from './LightSwitch';
import Logo from './Logo';
import NavbarItem from './NavbarItem';
const navBarArr = ['resources', 'register', 'login'];
const authenticatedNavBarArr = ['dashboard', 'expenses', 'user', 'logout'];

function Navbar({ isAuthenticated }) {
	const { darkmode } = useContext(DarkModeContext);

	return (
		<div
			className={
				darkmode
					? 'bg-slate-900 bg-gradient-to-tl from-slate-900 text-slate-200 bg-opacity-50 fixed w-full h-20 top-0 shadow-xl z-[100] backdrop-blur-sm '
					: 'bg-slate-100 bg-opacity-50 fixed w-full h-20 top-0 shadow-xl z-[100] backdrop-blur-sm text-slate-800'
			}
		>
			<div className="flex justify-between items-center w-full h-full px-2">
				{/* <Logo /> */}
				<div className="ml-10 py-3">
					<p className="tracking-widest text-sm capitalize">
						mode: {darkmode ? 'dark' : 'light'}
					</p>
					<LightSwitch />
				</div>
				<div>
					{isAuthenticated ? (
						<ul className="flex px-5">
							{authenticatedNavBarArr.map((navitem, index) => {
								return <NavbarItem key={index} navitem={navitem} />;
							})}
							<li className="ml-10 py-3">
								<LightSwitch />
							</li>
						</ul>
					) : (
						<ul className="flex px-5">
							{navBarArr.map((navitem, index) => {
								return <NavbarItem key={index} navitem={navitem} />;
							})}
						</ul>
					)}
				</div>
			</div>
		</div>
	);
}

export default Navbar;
