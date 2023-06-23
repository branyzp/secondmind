import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../hooks/DarkModeContext';

function Index() {
	let navigate = useNavigate();
	const { darkmode } = useContext(DarkModeContext);

	const handleClick = (route) => {
		navigate(route);
	};

	return (
		<div
			className={
				darkmode
					? 'dark bg-slate-900 text-slate-100 min-h-screen  py-10'
					: 'min-h-screen py-10'
			}
		>
			<div className="my-40 text-center max-w-md m-0 m-auto">
				<h1 className="text-xl tracking-tight">
					Hi, welcome to secondmind.
					<br />
					<br />I built this as a means of learning web development as well as
					documenting down some of the productivity knowledge that I found
					useful.
				</h1>
				<br />
				<h1 className="text-md tracking-tight">
					{' '}
					You may navigate using the navigation bar above
				</h1>
				<br />

				<h1 className="text-md tracking-tight">Thanks for the visit!</h1>

				{/* <div className="">
					<div className="">
						<button
							onClick={() => {
								handleClick('/login');
							}}
							className={
								darkmode
									? 'rounded-xl bg-yellow-500 hover:bg-yellow-400 text-slate-700 font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-600 hover:scale-105 ease-in duration-100'
									: 'rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 hover:scale-105 ease-in duration-100'
							}
						>
							Login
						</button>
					</div>
					<br />
					<div className="">
						<button
							onClick={() => {
								handleClick('/register');
							}}
							className={
								darkmode
									? 'rounded-xl bg-yellow-500 hover:bg-yellow-400 text-slate-700 font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-600 hover:scale-105 ease-in duration-100'
									: 'rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 hover:scale-105 ease-in duration-100'
							}
						>
							Register
						</button>
					</div>
				</div> */}
			</div>
		</div>
	);
}

export default Index;
