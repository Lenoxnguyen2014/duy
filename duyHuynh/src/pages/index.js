import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import Layout from "../components/layout.js"

const IndexPage = ({ data }) => {
  const page = data.allWordpressPost.edges[0].node
  return (
    <Layout>
    <div className="container">
<div className="columns">
<div className="column">
<h2 className="title is-2 level-item">{page.title}</h2>
</div>
<div className="column " dangerouslySetInnerHTML={{ __html: page.content }} />
</div>
</div>

</Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`