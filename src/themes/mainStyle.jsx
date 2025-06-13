import { styled } from "@mui/material/styles";
import { Box, Card } from "@mui/material";

export const MainContent = styled(Box)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "1fr 1.5fr 1.5fr",
    gridTemplateRows: "1fr 1fr",
    gridTemplateAreas: `
        "about skills skills"
        "projects projects projects"
    `,
    gap: theme.spacing(3),
    padding: theme.spacing(3, 3, 3, 3),
    maxWidth: 1200,
    // Move main content further left and add top/bottom gap for header/footer
    margin: "0 0 60px 60px",
    height: "auto", // more space for header/footer
    boxSizing: "border-box",
    overflow: "visible",
    background: "none", // Make main content background invisible
}));

export const SectionCard = styled(Card)(({ theme }) => ({
    background: theme.palette.background.paper,
    borderRadius: theme.spacing(2),
    boxShadow: `0 0 24px 4px ${theme.palette.primary.main}22, 0 0 48px 8px ${theme.palette.secondary.main}22`,
    border: `2px solid ${theme.palette.primary.main}55`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
    minHeight: 0,
    overflow: "hidden",
    transition: "box-shadow 0.2s, border-color 0.2s",
    "&:hover": {
        boxShadow: `0 0 48px 16px ${theme.palette.primary.main}44, 0 0 96px 32px ${theme.palette.secondary.main}33`,
        borderColor: theme.palette.primary.main,
    }
}));