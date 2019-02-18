import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const post = data.markdownRemark
  console.log('post', post);

  const formatContent = (html) => {
    // eslint-disable-next-line
    return html.replace(/\<a /g, '<a target="_blank" ')
  }
  return (
    <Layout>
      <article className="article">
        <header>
          <h1><Link to={post.fields.path}>{post.frontmatter.title}</Link></h1>
          <p className="article-author">By  
            <a href="https://yazhen.me" title="王亚振">王亚振</a>
          </p>
          <p className="article-time">
            发布于: <time>{post.frontmatter.date}</time>&nbsp;
            {/* 更新: <time>2019年01月14日</time> */}
          </p>
          
          <p className="clearfix"/>
        </header>
        <div className="article-content">
          <div dangerouslySetInnerHTML={{ __html: formatContent(post.html) }} />        
        </div>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(
          formatString: "YYYY年MM月DD日"
          locale: "zh-cn"
        )
      }
      fields {
        path: slug
      }
    }
  }
`

