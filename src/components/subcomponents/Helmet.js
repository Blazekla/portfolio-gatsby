import React from "react"

function Helmet() {
  return (
    <div>
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={config.siteKeywords} />
      <meta
        name="google-site-verification"
        content={config.googleVerification}
      />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={metadata.siteUrl} />
      <meta property="og:site_name" content={metadata.title} />
      <meta property="og:image" content={`${config.siteUrl}${ogImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:locale" content={config.siteLanguage} />
      <meta itemProp="name" content={metadata.title} />
      <meta itemProp="description" content={metadata.description} />
      <meta itemProp="image" content={`${config.siteUrl}${ogImage}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={metadata.siteUrl} />
      <meta name="twitter:site" content={config.twitterHandle} />
      <meta name="twitter:creator" content={config.twitterHandle} />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description} />
      <meta name="twitter:image" content={`${config.siteUrl}${ogImage}`} />
      <meta name="twitter:image:alt" content={metadata.title} />
    </div>
  )
}

export default Helmet
