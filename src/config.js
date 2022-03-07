import {createTheme} from '@material-ui/core/styles';

const theme = createTheme({
	palette: {
		type: 'light',
        primary: {
            main: '#3498db',
            contrastText: '#ecf0f1',
            info: '#3E5060',
            light: '#FFF',
        },
        secondary: {
            main: '#34495e',
            contrastText: '#ecf0f1',
            light: '#919da9'
        },
	},
});

const frontendAvailableStacks = ['React JS'];
const backendAvailableStacks = ['Python 3 / Fast API'];

export { theme, frontendAvailableStacks, backendAvailableStacks };