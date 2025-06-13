import { createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#3fd8ff',
            contrastText: '#0f111a'
        },
        secondary: {
            main: '#1b9aaa',
            contrastText: '#0f111a'
        },
        accent: {
            main: '#5e81ac',
            contrastText: '#0f111a'
        },
        purple: {
            main: '#7c3aed',
            contrastText: '#e0e6f0'
        },
        background: {
            default: '#0f111a',
            paper: '#181b26'
        },
        error: {
            main: '#ff5370'
        },
        warning: {
            main: '#ffc777'
        },
        success: {
            main: '#c3e88d'
        },
        text: {
            primary: '#e0e6f0',
            secondary: '#7f8fa3'
        },
        divider: '#23263a'
    },
    typography: {
        fontFamily: "'Roboto Mono', 'Roboto', 'Arial', monospace",
        fontWeightBold: 700,
        h1: {
            letterSpacing: 2,
            color: '#3fd8ff'
        },
        h2: {
            letterSpacing: 1.5,
            color: '#5e81ac'
        },
        button: { 
            textTransform: 'uppercase',
            fontWeight: 700,
            color: '#0f111a'
        }
    },
    shadows: [
        "none",
        "0 0 8px #1b9aaa, 0 0 24px #3fd8ff",
        ...Array(23).fill("0 0 8px #23263a, 0 0 24px #1b9aaa")
    ]
});

export default theme;