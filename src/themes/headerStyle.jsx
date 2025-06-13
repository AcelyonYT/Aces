import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Header = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: theme.spacing(4),
    padding: theme.spacing(4, 2, 2, 2),
    width: '100%',
    boxSizing: 'border-box',
    borderBottom: `3px solid ${theme.palette.primary.main}`,
    boxShadow: `0 2px 24px 4px ${theme.palette.primary.main}22, 0 4px 48px 8px ${theme.palette.secondary.main}22`,
    background: `linear-gradient(90deg, ${theme.palette.background.paper} 80%, ${theme.palette.primary.main}11 100%)`,
}));

export const ProfileInfo = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: theme.spacing(1),
}));

export const PFP = styled('img')(({ theme }) => ({
    width: 96,
    height: 96,
    borderRadius: '50%',
    objectFit: 'cover',
    border: `3px solid ${theme.palette.secondary.main}`,
    boxShadow: `0 0 24px 8px ${theme.palette.primary.main}33, 0 0 48px 16px ${theme.palette.secondary.main}22`,
    transition: "box-shadow 0.2s, border-color 0.2s",
    "&:hover": {
        boxShadow: `0 0 48px 16px ${theme.palette.secondary.main}44, 0 0 96px 32px ${theme.palette.primary.main}33`,
        borderColor: theme.palette.primary.main,
    }
}));