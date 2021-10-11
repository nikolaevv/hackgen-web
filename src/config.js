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

const frontendAvailableStacks = ['React JS'];
const backendAvailableStacks = ['Python 3 / Fast API'];

export { theme, frontendAvailableStacks, backendAvailableStacks };