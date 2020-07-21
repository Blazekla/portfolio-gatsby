import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import config from "../config/index"
import SEOImage from "../images/HomepageOG.png"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
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
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={[{ rel: `canonical`, href: `${site.siteMetadata.siteUrl}` }]}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `google-site-verification`,
          content: config.googleVerification,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: site.siteMetadata.siteUrl,
        },
        {
          property: `og:site_name`,
          content: title,
        },
        {
          property: `og:image`,
          // content: `${site.siteMetadata.siteUrl}${image.childImageSharp.fluid.src}`,
          content: `${site.siteMetadata.siteUrl}${SEOImage}`,
        },
        {
          property: `og:image:type`,
          content: `image/png`,
        },
        {
          property: `og:locale`,
          content: config.siteLanguage,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:url`,
          content: site.siteMetadata.siteUrl,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:site`,
          content: site.siteMetadata.siteUrl,
        },
        {
          name: `twitter:image`,
          // content: `${site.siteMetadata.siteUrl}${image.childImageSharp.fluid.src}`,
          content: `${site.siteMetadata.siteUrl}${SEOImage}`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        // .concat(
        //   keywords.length > 0
        //     ? {
        //         name: `keywords`,
        //         content: keywords.join(`, `),
        //       }
        //     : []
        // )
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  // keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  // keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO
