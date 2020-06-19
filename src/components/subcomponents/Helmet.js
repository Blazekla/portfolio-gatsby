import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

//Import Custom Components
import HomepageOG from "../../images/HomepageOG.png"
import config from "../../config/index"

function SEO({ title, lang }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
        }
      }
    }
  `)

  const metadata = site.siteMetadata

  return (
    <Helmet
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      htmlAttributes={{ lang }}
    >
      {/* <meta name="description" content={metadata.description} /> */}
      <meta name="keywords" content={config.siteKeywords} />
      {/* <meta
        name="google-site-verification"
        content={config.googleVerification}
      /> */}
      {/* <meta property="og:title" content={metadata.title} /> */}
      {/* <meta property="og:description" content={metadata.description} /> */}
      {/* <meta property="og:type" content="website" /> */}
      {/* <meta property="og:url" content={metadata.siteUrl} /> */}
      {/* <meta property="og:site_name" content={metadata.title} /> */}
      {/* <meta property="og:image" content={`${config.siteUrl}${HomepageOG}`} /> */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {/* <meta property="og:image:type" content="image/png" /> */}
      {/* <meta property="og:locale" content={config.siteLanguage} /> */}
      <meta itemProp="name" content={metadata.title} />
      <meta itemProp="description" content={metadata.description} />
      <meta itemProp="image" content={`${config.siteUrl}${HomepageOG}`} />
      {/* <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={metadata.siteUrl} />
      <meta name="twitter:site" content={config.twitterHandle} />
      <meta name="twitter:creator" content={config.twitterHandle} /> */}
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description} />
      {/* <meta name="twitter:image" content={`${config.siteUrl}${HomepageOG}`} /> */}
      <meta name="twitter:image:alt" content={metadata.title} />
    </Helmet>
  )
}

export default SEO

SEO.defaultProps = {
  lang: `en`,
  description: ``,
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  lang: PropTypes.string,
  description: PropTypes.string,
}
