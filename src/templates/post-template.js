import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export const query = graphql`
query($id: String!) {
strapiPosts(id: { eq: $id }) {
    title
    description
    featured_image {
      childImageSharp {
        fluid {
          src
        }
      }
    }
}
}
`

const PostTemplate = ({ data }) => {
  const { title, description } = data.strapiPosts
  return (
    <Layout>
      <h1 dangerouslySetInnerHTML={{ __html: title }} />
      {/* <img src={data.strapiPosts.featured_image.childImageSharp.fluid.src} alt="" /> */}
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </Layout>
  )
}

export default PostTemplate
