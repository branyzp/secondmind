import React, { createContext, useEffect, useState } from 'react';

const DarkModeContext = createContext();

function DarkModeProvider(props) {
	const [darkmode, setDarkmode] = useState(false);

	useEffect(() => {
		const existingPreference = localStorage.getItem('darkState');
		if (existingPreference) {
			existingPreference === 'light' ? setDarkmode(false) : setDarkmode(true);
		} else {
			setDarkmode(false);
			localStorage.setItem('darkState', 'light');
		}
	}, []);

	const toggleDarkMode = () => {
		// setDarkmode(!darkmode);
		if (darkmode === false) {
			setDarkmode(true);
			localStorage.setItem('darkState', 'dark');
		} else {
			setDarkmode(false);
			localStorage.setItem('darkState', 'light');
		}
	};

	return (
		<div>
			<DarkModeContext.Provider value={{ darkmode, toggleDarkMode }}>
				{props.children}
			</DarkModeContext.Provider>
		</div>
	);
}

export { DarkModeProvider, DarkModeContext };
