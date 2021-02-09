import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export const query = graphql`
query($slug: String!) {
strapiCategories(slug: { eq: $slug }) {
    name
    posts {
    title
    slug
    description
    }
}
}
`

const CategoryTemplate = ({ data }) => {
//   const { name, posts } = data.strapiCategories
//   return (
//     <Layout>
//       <h1 dangerouslySetInnerHTML={{ __html: name }} />
//       <div dangerouslySetInnerHTML={{ __html: posts.title }} />
//       <div dangerouslySetInnerHTML={{ __html: posts.description }} />
//     </Layout>
//   )
return (
    <Layout>
        <h1>{data.strapiCategories.name}</h1>
        {data.strapiCategories.posts.map(post => (
            <div>
                <Link to={post.slug}>{post.title}</Link>
                <p dangerouslySetInnerHTML={{ __html: post.description }}></p>
            </div>
        ))}
    </Layout>
)
}

export default CategoryTemplate
