import { useNavigate } from "react-router-dom";
import { Box, Typography, CardContent, Card, Button, Grid, Avatar } from "@mui/material";

import { MainContent, SectionCard } from "../themes/mainStyle";

// Highlighted skills (icons can be added later)
const skills = [
    { name: "Frontend" },
    { name: "Backend" },
    { name: "JavaScript" },
    { name: "Java" }
];

// Example projects (replace with real data/images)
const projects = [
    { title: "Project One", desc: "A cool project about X.", img: "" },
    { title: "Project Two", desc: "Another awesome project.", img: "" },
    { title: "Project Three", desc: "Yet another project.", img: "" }
];

function Home() {
    const navigate = useNavigate();

    return (
        <MainContent>
            {/* About Me */}
            <SectionCard sx={{ gridArea: "about", minWidth: 220, maxWidth: 320 }}>
                <CardContent>
                    <Typography variant="h5" gutterBottom>About Me</Typography>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                        Hi! I'm Logan, a passionate software developer with a love for building full-stack applications and exploring new technologies.
                    </Typography>
                    <Button variant="contained" color="secondary" onClick={() => navigate("/about")}>
                        Read More
                    </Button>
                </CardContent>
            </SectionCard>
            {/* Skills */}
            <SectionCard sx={{ gridArea: "skills", minWidth: 280, maxWidth: 400 }}>
                <CardContent>
                    <Typography variant="h5" gutterBottom>Highlighted Skills</Typography>
                    <Grid container spacing={2} sx={{ mb: 2 }}>
                        {skills.map((skill) => (
                            <Grid item xs={3} key={skill.name} sx={{ textAlign: "center" }}>
                                <Avatar sx={{ bgcolor: "primary.main", margin: "0 auto" }}>{skill.name[0]}</Avatar>
                                <Typography variant="subtitle1">{skill.name}</Typography>
                            </Grid>
                        ))}
                    </Grid>
                    <Button variant="contained" color="secondary" onClick={() => navigate("/skills")}>
                        View All Skills
                    </Button>
                </CardContent>
            </SectionCard>
            {/* Projects */}
            <SectionCard sx={{ gridArea: "projects", minWidth: 320, maxWidth: 500 }}>
                <CardContent>
                    <Typography variant="h5" gutterBottom>Featured Projects</Typography>
                    <Grid container spacing={2}>
                        {projects.map((proj) => (
                            <Grid item xs={4} key={proj.title}>
                                <Card sx={{ background: "transparent", boxShadow: "none" }}>
                                    <Box sx={{ height: 80, mb: 1, bgcolor: "grey.900", borderRadius: 2, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        {/* Replace with <img src={proj.img} ... /> when available */}
                                        <Typography variant="h3" color="grey.700">📦</Typography>
                                    </Box>
                                    <Typography variant="subtitle1" fontWeight="bold">{proj.title}</Typography>
                                    <Typography variant="body2">{proj.desc}</Typography>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    <Button variant="contained" color="secondary" sx={{ mt: 2 }} onClick={() => navigate("/projects")}>
                        See More Projects
                    </Button>
                </CardContent>
            </SectionCard>
        </MainContent>
    );
}

export default Home;