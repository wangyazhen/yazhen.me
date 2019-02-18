import React from 'react'
import Layout from '../components/layout'
import ArticleList from '../components/articleList'
import ArticlePagination from '../components/pagination'

const IndexPage = ({ pageContext }) => {
  return (
    <Layout>
      <ArticleList articles={pageContext.group} />
      <ArticlePagination pageContext={pageContext} />
    </Layout>
  )
}
export default IndexPage
