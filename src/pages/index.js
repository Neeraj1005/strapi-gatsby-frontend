import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Strapi-Posts" />
    {data.allStrapiPosts.nodes.map(post => (
      <div>
        <h5>
          <Link to={post.id}>{post.title}</Link>
        </h5>
        {post.categories.map(cat => (
          <Link to={`/category/${cat.slug}`}>{cat.name}</Link>
        ))}
        {/* <img
          style={{ width: `5rem` }}
          src={post.featured_image.childImageSharp.fluid.src}
          alt=""
        /> */}
      </div>
    ))}
  </Layout>
)

export const allPosts = graphql`
  query strapiAllPostsQuery {
    allStrapiPosts(sort: { fields: id, order: DESC }) {
      nodes {
        id
        title
        slug
        published_at(formatString: "DD-MMM-YYYY")
        categories {
          id
          name
          slug
        }
        featured_image {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`
export default IndexPage
