import React from 'react'
import { Link } from 'gatsby'
import styles from './article.module.css'

const ArticleItem = ({ item }) => (
<section className={styles.post}>
  <Link to={item.fields.slug} title={item.title}>
    <h1>{ item.frontmatter.title }</h1>
    <p>{item.excerpt}</p>
    <time>{item.frontmatter.date}</time>
  </Link>
</section>)


export default ({ articles }) => {
  return (
    <section>
      {articles.map(v => <ArticleItem key={v.node.id} item={v.node} />)}
    </section>
  )
}