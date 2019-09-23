const path = require('path')
const _ = require("lodash")
const { createFilePath } = require(`gatsby-source-filesystem`)
const createPaginatedPages = require('gatsby-paginate')

// onCreateWebpackConfig
// module.exports.modifyWebpackConfig = function({config, env}) {
//   config.merge({
//     resolve: {
//       root: path.resolve(__dirname, './src'),
//       extensions: ['', '.js', '.jsx', '.json'],
//     }
//   })
//   return config
// }

module.exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    // console.log('onCreateNode %s -- %s ', node.internal.type, slug)
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

module.exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              tags
              date(
                formatString: "YYYY年MM月DD日"
                locale: "zh-cn"
              )              
            }
            fields {
              slug
            }
            excerpt
          }
        }
      }
    }
  `
  ).then(result => {
    const posts = result.data.allMarkdownRemark.edges    
    // console.log('pages length:', posts.length)

    createPaginatedPages({
      edges: posts,
      createPage: createPage,
      pageTemplate: 'src/templates/index.js',
      pageLength: 10, // This is optional and defaults to 10 if not used
      pathPrefix: '', // This is optional and defaults to an empty string if not used
      context: {}, // This is optional and defaults to an empty object if not used
    })

    posts.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      })
    })
    
    // Tag pages:
    const tagTemplate = path.resolve("src/templates/tags.js")
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    _.each(posts, edge => {
      if (_.get(edge, "node.frontmatter.tags")) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)

    // Make tag pages
    tags.forEach(tag => {
      createPage({
        path: `/tags/${_.kebabCase(tag)}/`,
        component: tagTemplate,
        context: {
          tag,
        },
      })
    })

    // Make archives Pages
    const archives = []
    try {
      const getDate = d => d.substr(0, d.indexOf("月") +1)
      const obj = _.groupBy(posts, (v) => getDate(v.node.frontmatter.date))
      _.mapKeys(obj, (v,k) => archives.push({ month: k, length: v.length }))
    } catch (e) {
      console.log('has error*')
    }

    archives.forEach(({ month }) => {
      createPage({
        path: `/archives/${_.kebabCase(month.replace(/[\u4e00-\u9fa5]/g, '-'))}/`,
        component: path.resolve(`./src/templates/archives.js`),
        context: {
          month,
        },
      })
    })

  })
}

