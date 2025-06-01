import { createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: '#212121'
        },
        secondary: {
            main: '#000000'
        },
        background: {
            default: '#212121',
            paper: '#2c2c2c'
        }
    }
});

export default theme;