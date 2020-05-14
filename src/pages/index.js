import React from "react"

//Import MaterialUI Components

//Import custom components
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroBanner from "../components/HeroUnit"
import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroBanner />
      <Projects />
      <About />
      <Contact />
    </Layout>
  )
}

export default IndexPage
