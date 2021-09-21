import {createTheme} from '@material-ui/core/styles';

const theme = createTheme({
	palette: {
		type: 'light',
        primary: {
            main: '#3498db',
            contrastText: '#ecf0f1',
        },
        secondary: {
            main: '#34495e',
            contrastText: '#ecf0f1',
        }
	},
});

export {theme};