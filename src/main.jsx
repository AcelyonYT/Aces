import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';

import pfp from "./assets/images/aceOfSpadesPFP.jpg";
import homeIcon from "./assets/icons/icons8-home-50.png";
import aboutIcon from "./assets/icons/icons8-book-50.png";
import skillsIcon from "./assets/icons/icons8-skills-50.png";
import projectIcon from "./assets/icons/icons8-folder-50.png";
import githubIcon from "./assets/icons/icons8-github-50.png";
import linkedinIcon from "./assets/icons/icons8-linkedin-50.png";

import theme from './themes/theme';
import { Navbar, NavLinks } from './themes/navStyle';
import { Header, ProfileInfo, PFP } from './themes/headerStyle';
import { Footer } from './themes/footerStyle';

import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Projects";
import Skills from "./pages/Skills";

function AppLayout({ children }) {
    const location = useLocation;
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            overflow: "hidden",
        }}>
            {/* Header */}
            <Header sx={{ flexShrink: 0 }}>
                 <PFP src={pfp} alt="Ace Of Spades" />
                <ProfileInfo>
                    <h1 style={{ margin: 0 }}>Hello! I'm Logan!</h1>
                    <p style={{ margin: 0 }}>Software Developer | Full Stack | Computer Science Enthusiast</p>
                </ProfileInfo>
            </Header>

            {/* Layout with Nav and Main */}
            <Box sx={{ display: "flex", flex: 1, minHeight: 0 }}>
                {/* Vertical Navbar */}
                <Navbar>
                    <NavLinks href="/home" style={location.pathname === "/home" || location.pathname === "/" ? { background: "#333" } : {}}>
                        <img src={homeIcon} alt="Home" />
                    </NavLinks>
                    <NavLinks href="/about" style={location.pathname === "/about" ? { background: "#333" } : {}}>
                        <img src={aboutIcon} alt="About" />
                    </NavLinks>
                    <NavLinks href="/skills" style={location.pathname === "/skills" ? { background: "#333" } : {}}>
                        <img src={skillsIcon} alt="Skills" />
                    </NavLinks>
                    <NavLinks href="/projects" style={location.pathname === "/projects" ? { background: "#333" } : {}}>
                        <img src={projectIcon} alt="Projects" />
                    </NavLinks>
                </Navbar>

                {/* Main Content */}
                <Box
                    component="main"
                    sx={{
                        flex: 1,
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        minHeight: 0,
                        marginLeft: "100px", // space for nav
                    }}
                >
                    {children}
                </Box>
            </Box>

            {/* Footer */}
            <Footer sx={{ flexShrink: 0 }}>
                <span>
                    <b>Contacts:</b>
                    <a href="#"><img src={githubIcon} alt="Github" /></a>
                    <a href="#"><img src={linkedinIcon} alt="Linkedin" /></a>
                </span>
                <span>
                    Email: <a href="mailto:ljpeters2002@gmail.com">ljpeters2002@gmail.com</a>
                </span>
            </Footer>
        </Box>
    );
}

function App() {
    return(
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<AppLayout><Home /></AppLayout>} />
                    <Route path="/home" element={<AppLayout><Home /></AppLayout>} />
                    <Route path="/about" element={<AppLayout><About /></AppLayout>} />
                    <Route path="/skills" element={<AppLayout><Skills /></AppLayout>} />
                    <Route path="/projects" element={<AppLayout><Project /></AppLayout>} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);