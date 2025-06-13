import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Footer = styled(Box)(({ theme }) => ({
    width: '100%',
    position: 'fixed',
    left: 0,
    bottom: 0,
    background: theme.palette.background.paper,
    color: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2, 4),
    zIndex: 1000,
    boxSizing: 'border-box',
    fontSize: 16,
    borderTop: `2.5px solid ${theme.palette.secondary.main}`,
    boxShadow: `0 -2px 24px 4px ${theme.palette.primary.main}22, 0 -4px 48px 8px ${theme.palette.secondary.main}22`,
    "& a": {
        color: theme.palette.secondary.main,
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        textShadow: `0 0 12px ${theme.palette.primary.main}33, 0 0 24px ${theme.palette.secondary.main}22`,
        transition: "color 0.2s, text-shadow 0.2s",
        "&:hover": {
            color: theme.palette.primary.main,
            textShadow: `0 0 24px ${theme.palette.secondary.main}44, 0 0 48px ${theme.palette.primary.main}33`,
        }
    },
    "& img": {
        width: 28,
        height: 28,
        verticalAlign: 'middle',
        filter: `drop-shadow(0 0 8px ${theme.palette.primary.main}33) drop-shadow(0 0 16px ${theme.palette.secondary.main}22)`
    }
}));