import { useNavigate } from "react-router-dom";
import { Box, Typography, CardContent, Card, Button, Grid, Avatar } from "@mui/material";

import { MainContent, SectionCard } from "../themes/mainStyle";

import pfp from "../assets/images/aceOfSpadesPFP.jpg";

// Highlighted skills (icons can be added later)
const skills = [
    { name: "Frontend" },
    { name: "Backend" },
    { name: "JavaScript" },
    { name: "Java" }
];

// Example projects (replace with real data/images)
const projects = [
    { title: "Personal Website", desc: "A website to display my skills and to personally play around with.", img: pfp },
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
            <SectionCard sx={{ gridArea: "projects", minWidth: 320, width: "fit-content" }}>
                <CardContent>
                    <Typography variant="h5" gutterBottom>Featured Projects</Typography>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: 2,
                            height: 180, // Fixed height for the project area
                            alignItems: "flex-start",
                            mb: 2,
                        }}
                    >
                        {projects.map((proj) => (
                            <Card
                                key={proj.title}
                                sx={{
                                    background: "transparent",
                                    boxShadow: "none",
                                    minWidth: 140,
                                    maxWidth: 180,
                                    flex: "0 0 auto",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    height: "100%",
                                }}
                            >
                                <Box sx={{
                                    height: 80,
                                    width: 80,
                                    mb: 1,
                                    bgcolor: "grey.900",
                                    borderRadius: 2,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    overflow: "hidden",
                                }}>
                                    {proj.img ? (
                                        <img
                                            src={proj.img}
                                            alt="📦"
                                            style={{
                                                width: 150,
                                                height: 150,
                                                objectFit: "contain",
                                                display: "block",
                                            }}
                                        />
                                    ) : (
                                        <Typography variant="h3" color="grey.700">📦</Typography>
                                    )}
                                </Box>
                                <Typography variant="subtitle1" fontWeight="bold" align="center">{proj.title}</Typography>
                                <Typography variant="body2" align="center">{proj.desc}</Typography>
                                <p style={{ margin: 0 }}><a href="https://github.com/AcelyonYT/Aces">Github Repo</a></p>
                            </Card>
                        ))}
                    </Box>
                    <Button variant="contained" color="secondary" sx={{ mt: 2 }} onClick={() => navigate("/projects")}>
                        See More Projects
                    </Button>
                </CardContent>
            </SectionCard>
        </MainContent>
    );
}

export default Home;