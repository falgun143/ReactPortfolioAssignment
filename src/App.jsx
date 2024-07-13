import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Profile from "../src/components/Profile/Profile";
import About from "../src/components/About/About";
import Skills from "../src/components/Skills/Skills";
import Portfolio from "../src/components/Portfolio/Portfolio"
import { Container, Grid } from "@mui/material";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <Router>
        <Container className="top_36">
          <Grid container gap={6}>
            <Grid item xs={12} s={12} m={4} lg={3}>
              <Profile></Profile>
            </Grid>

            <Grid item xs>
              <Layout>
                <Routes>
                  <Route path="/PortfolioAssignment/About" element={<About />} />
                  <Route path="/PortfolioAssignment/skills" element={<Skills />} />
                  <Route path="/PortfolioAssignment/portfolio" element={<Portfolio />} />
                
                </Routes>
              </Layout>
            </Grid>
          </Grid>
        </Container>
      </Router>
    </>
  );
}

export default App;
