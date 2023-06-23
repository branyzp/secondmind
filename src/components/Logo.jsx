import React from 'react';
import { useContext } from 'react';
import { DarkModeContext } from '../hooks/DarkModeContext';

function Logo() {
	const { darkmode } = useContext(DarkModeContext);
	return (
		<img
			className=" max-h-full
            "
			src={
				darkmode
					? 'https://i.imgur.com/vzG6D6w.png'
					: 'https://i.imgur.com/arsdJNI.png'
			}
		/>
	);
}

export default Logo;
