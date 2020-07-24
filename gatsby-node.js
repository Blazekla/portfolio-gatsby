const path = require("path")
const { start } = require("repl")

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
      allStrapiProjects(
        sort: { fields: Order, order: ASC }
        filter: { Production: { eq: true } }
      ) {
        nodes {
          Slug
        }
      }
    }
  `)

  const totalCountProjects = res.data.allStrapiProjects.nodes.length
  const projectPage = res.data.allStrapiProjects.nodes
  projectPage.forEach((entry, index) => {
    const previous = index === 0 ? null : projectPage[index - 1]
    const next =
      index === totalCountProjects - 1 ? null : projectPage[index + 1]

    createPage({
      path: `projects/${entry.Slug}`,
      component: projectTemplate,
      context: {
        //Data passed to context is available
        //in page queries as GraphQL variables.
        slug: entry.Slug,
        previous,
        next,
      },
    })
  })
}
