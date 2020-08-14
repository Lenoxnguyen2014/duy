/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
const { node } = require('prop-types')

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return graphql(`
      {
        allWordpressPage {
            edges {
              node {
                slug
                wordpress_id
              }
            }
          }
        allWordpressPost(
          sort: { fields: [date] }
          limit: 1000
          ) {
          edges {
            node {
              title
              excerpt
              content
              slug
            }
          }
        }
    }
    `).then(
      //render list of post 
      result => {
      // render each post 
      result.data.allWordpressPost.edges.forEach(({ node }) => {
        createPage({
          path: `films/` + node.slug,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            // This is the $slug variable
            // passed to blog-post.js
            slug: node.slug,
          },
        })
      }),  
      result.data.allWordpressPage.edges.forEach(({ node }) => {
        createPage({
          path: node.slug,
          component: path.resolve(`./src/templates/page.js`),
          context: {
            // This is the $slug variable
            // passed to page.js
            id: node.wordpress_id,
          },
        })
      })
    })
  }
    