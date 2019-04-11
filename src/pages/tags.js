import React from "react"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import Layout from '../components/layout'
import styles from './tags.module.css'

const TagItem = ({ tag }) => (<section className={styles.itemBox}>
  <Link to={`tags/${kebabCase(tag.fieldValue)}/`}>
    <h1>{tag.fieldValue} ({tag.totalCount})</h1>
    {/* <time>2017年02月13日</time> */}
  </Link>
</section>)

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <Helmet title={title} />
    <div className={styles.tagTitle}>
      <h2><span role="img">🏷</span> 所有标签</h2>
    </div>
    <div className={styles.gridBox}>
      {group.filter(tag => !!tag.fieldValue && tag.fieldValue !== "undefined").map(tag => <TagItem key={tag.fieldValue} tag={tag} />)}
    </div>
  </Layout>
)

export default TagsPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`