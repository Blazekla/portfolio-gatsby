import React from "react"

//Import custom components
import Layout from "../components/layout"
import HeroBanner from "../components/HeroUnit"
import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <>
      <Layout>
        <SEO title="Home" />
        <HeroBanner />
        <Projects />
        <About />
        <Contact />
      </Layout>
    </>
  )
}

export default IndexPage
