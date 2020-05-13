import React from "react"

//Import MaterialUI Components
import Container from "@material-ui/core/Container"

//Import custom components
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroBanner from "../components/HeroUnit"
import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    {/* <HeroBanner /> */}
    <Container id="projects" maxWidth="md" style={{ paddingTop: "70px" }}>
      <Projects />
    </Container>

    <About />
    <Contact />
  </Layout>
)

export default IndexPage
