import React from "react"
import { Link, graphql } from "gatsby"
import Layout from '../components/layout'
import styles from '../pages/tags.module.css'

const ArticleItem = ({ node: { fields: { slug }, frontmatter: { title, date } } }) => (
  <section className={styles.itemBox}>
    <Link to={slug}>
      <h1>{title}</h1>
      <time>{date}</time>
    </Link>
  </section>
)

const Page = ({ pageContext, data }) => {
  const { month } = pageContext
  const posts = data.allMarkdownRemark.edges
  const items = posts.filter(v => v.node.frontmatter.date.indexOf(month) > -1)

  return (
    <Layout>
      <div class={styles.tagTitle}>
        <h2>
          {month} ({items.length})
        </h2>
      </div>
      <div className={styles.gridBox}>
        {items.map(({ node }) => <ArticleItem key={node.frontmatter.title} node={node} />)}
      </div>
    </Layout>
  )
}

export default Page

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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
