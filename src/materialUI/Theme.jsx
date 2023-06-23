import { createTheme } from '@mui/material';
import { lightBlue } from '@mui/material/colors';

const theme = createTheme({
	palette: {
		primary: {
			main: '#A1C3CD',
			light: lightBlue[100],
			dark: lightBlue[500],
		},
		secondary: {
			main: lightBlue[300],
		},
	},
});

export default theme;
