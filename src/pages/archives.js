import React from "react"

// Utilities
import _ from "lodash"
import kebabCase from "lodash/kebabCase"

// Components
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import Layout from '../components/layout'
import styles from './tags.module.css'

const Item = ({ item }) => (<section className={styles.itemBox}>
  <Link to={`/archives/${kebabCase(item.year.replace(/[\u4e00-\u9fa5]/g, '-'))}/`}>
    <h1>{item.year} ({item.length})</h1>
  </Link>
</section>)

const Page = ({
  data: {
    allMarkdownRemark: { edges },
    site: {
      siteMetadata: { title },
    },
  },
}) => {
  const obj = _.groupBy(edges, (v) => v.node.frontmatter.date)
  const items = [];_.mapKeys(obj, (v,k) => items.push({year: k, length: v.length}))

  return (
    <Layout>
      <Helmet title={title} />
      <div className={styles.tagTitle}>
        <h2><span role="img" aria-label="img">👻</span> 文章归档</h2>
      </div>
      <div className={styles.gridBox}>
        {items.map(item => <Item key={item.year} item={item} />)}
      </div>
    </Layout>
  )
}

export default Page

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
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
              formatString: "YYYY年MM月"
            )
          }
        }
      }
    }
  }
`