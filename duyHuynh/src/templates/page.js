import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout.js"
import SEO from "../components/seo"
import Img from "gatsby-image"
import "../pages/mystyle.scss"

function Page({ data }) {
    const page = data.allWordpressPage.edges[0].node
    return(
        <Layout>
      a<div className="container">
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

export default Page

export const query = graphql`
  query($id: Int!) 
  {
      allWordpressPage(filter: { wordpress_id: { eq: $id } }) 
      {
        edges {
            node {
                title
                date( formatString: "YYYY-MM-DD" )
                content
                slug
                wordpress_id
                }
            }
        }
    
}
`