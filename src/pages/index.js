import React from "react"
//Import MaterialUI Components
import CssBaseline from "@material-ui/core/CssBaseline"
import Container from "@material-ui/core/Container"

//Import custom components
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import HeroBanner from "../components/HeroUnit"
import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"

const IndexPage = () => (
  <Layout>
    <CssBaseline />
    <SEO title="Home" />
    <div className="content">
      <Container
        maxWidth="md"
        className="mainContent"
        style={{ minHeight: "100vh" }}
      >
        <HeroBanner />
        <Container id="projects" maxWidth="md" style={{ paddingTop: "70px" }}>
          <Projects />
        </Container>

        <About />
        <Contact />
      </Container>
    </div>
  </Layout>
)

export default IndexPage
