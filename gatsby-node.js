const path = require("path")

// https://www.gatsbyjs.org/docs/debugging-html-builds/#fixing-third-party-modules
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /scrollreveal/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const projectTemplate = path.resolve("./src/templates/projectPage.js")
  const res = await graphql(`
    {
      allStrapiProjects(filter: { Production: { eq: true } }) {
        nodes {
          Slug
        }
      }
    }
  `)
  console.log("entries here: ", res.data.allStrapiProjects.nodes)
  res.data.allStrapiProjects.nodes.forEach(entry => {
    createPage({
      path: `projects/${entry.Slug}`,
      component: projectTemplate,
      context: {
        //Data passed to context is available
        //in page queries as GraphQL variables.
        slug: entry.Slug,
      },
    })
  })
}
