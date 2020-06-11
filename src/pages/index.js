import React from "react"

//Import custom components
import Layout from "../components/layout"
import Helmet from "../components/subcomponents/Helmet"
import HeroBanner from "../components/HeroUnit"
import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"

const IndexPage = () => {
  return (
    <Layout>
      <Helmet title="Home" />
      <HeroBanner />
      <Projects />
      <About />
      <Contact />
    </Layout>
  )
}

export default IndexPage
