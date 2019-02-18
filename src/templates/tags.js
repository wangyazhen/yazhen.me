import React from "react"

// Components
import { Link, graphql } from "gatsby"
import Layout from '../components/layout'
import styles from '../pages/tags.module.css'

const TagArticleItem = ({ node: { fields: { slug }, frontmatter: { title, date } } }) => (
<section className={styles.itemBox}>
  <Link to={slug}>
    <h1>{title}</h1>
    <time>{date}</time>
  </Link>
</section>)

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  // const tagHeader = `${totalCount} post${
  //   totalCount === 1 ? "" : "s"
  // } tagged with "${tag}"`
  const tagHeader = `"${tag}" 标签下有${totalCount}篇文章`

  return (
    <Layout>
      <div class={styles.tagTitle}>
        <h2><span role="img">🏷</span> {tagHeader}</h2>
      </div>
      <div className="clearfix">
        {edges.map(({ node }) => <TagArticleItem key={node.frontmatter.path} node={node} />)}
      </div>
    </Layout>
  )
}


export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
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
