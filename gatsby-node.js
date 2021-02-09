exports.createPages = async ({ actions, graphql }) => {
  const GET_PAGES = `
    query strapiAllPostsQuery {
        allStrapiPosts {
        nodes {
            id
            title
            slug
            published_at(formatString: "DD-MMM-YYYY")
            categories {
            id
            name
            }
            featured {
            childImageSharp {
                fluid {
                src
                }
            }         
            }
        }
        }
        allStrapiCategories {
            nodes {
              name
              slug
              id
            }
          }
    }
  `
  const result = await graphql(GET_PAGES)
  result.data.allStrapiPosts.nodes.forEach(page => {
    actions.createPage({
      path: page.id,
      component: require.resolve("./src/templates/post-template.js"),
      context: { id: page.id },
    })
  })
  result.data.allStrapiCategories.nodes.forEach(category => {
    actions.createPage({
      path: `category/${category.slug}`,
      component: require.resolve("./src/templates/category-template.js"),
      context: { slug: category.slug },
    })
  })
}
