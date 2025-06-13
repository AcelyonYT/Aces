import { styled } from "@mui/material/styles";

export const Navbar = styled('nav')(({ theme }) => ({
    position: 'fixed',
    top: '50%',
    left: 0,
    transform: 'translateY(-50%)',
    height: 'auto',
    width: 56,
    marginLeft: theme.spacing(2),
    background: theme.palette.background.paper,
    borderRadius: theme.spacing(2),
    boxShadow: `0 0 24px 6px ${theme.palette.primary.main}33, 0 0 48px 12px ${theme.palette.secondary.main}22`,
    border: `2.5px solid ${theme.palette.secondary.main}`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2, 0),
    gap: theme.spacing(2),
    zIndex: 1000,
}));

export const NavLinks = styled('a')(({ theme }) => ({
    color: theme.palette.secondary.main,
    margin: theme.spacing(1, 0),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 44,
    height: 44,
    borderRadius: '50%',
    border: `2px solid ${theme.palette.primary.main}55`,
    background: `${theme.palette.background.default}CC`,
    boxShadow: `0 0 8px 2px ${theme.palette.primary.main}22`,
    transition: 'background 0.2s, box-shadow 0.2s, border-color 0.2s, color 0.2s',
    '&:hover': {
        background: theme.palette.secondary.main,
        color: theme.palette.background.default,
        borderColor: theme.palette.primary.main,
        boxShadow: `0 0 24px 8px ${theme.palette.secondary.main}44, 0 0 48px 16px ${theme.palette.primary.main}33`,
    },
    '& img': {
        width: 32,
        height: 32,
        filter: `drop-shadow(0 0 6px ${theme.palette.primary.main}33) drop-shadow(0 0 12px ${theme.palette.secondary.main}22)`
    }
}));