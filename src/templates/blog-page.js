import React from "react"
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import ArticleList from '../components/articleList'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges
    const { totalPage, currentPage } = this.props.pageContext

    return (
      <Layout>
        <ArticleList articles={posts} />
        <div>
          {currentPage - 1 > 0 && (
            <Link
              to={'/blog/' + (currentPage - 1 === 1 ? '' : currentPage - 1)}
              rel="prev"
            >
              ← 上一页
            </Link>
          )}
        </div>
        <div>
          {currentPage + 1 <= totalPage && (
            <Link to={'/blog/' + (currentPage + 1)} rel="next">
              下一页 →
            </Link>
          )}
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date(
              formatString: "YYYY年MM月DD日"
              locale: "zh-cn"
            )
          }
        }
      }
    }
  }
`

