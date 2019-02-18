import React from "react"
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import ArticleList from '../components/articleList'

// import { css } from "@emotion/core"

export default ({ data, pageContext: { currentPage, totalPage } }) => (
  <Layout>
    <ArticleList articles={data.allMarkdownRemark.edges} />
    {/* <div>
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
    </div> */}
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
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

