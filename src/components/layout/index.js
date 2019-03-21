import React from "react"
import Header from './header'
import Footer from './footer'
import SiderBar from './siderBar'
import Helmet from 'react-helmet'
import config from '../../utils/config'

export default ({ children }) => (<>
  <Helmet>
    <meta charSet="utf-8" />
    <title>{config.title}</title>
    <link rel="icon" href={config.favicon}></link>
    <meta name="apple-touch-icon" content={config.favicon}></meta>
    <meta name="apple-mobile-web-app-title" content={config.hostname}></meta>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=3, minimum-scale=1"></meta>
    <meta name="author" content={config.author}></meta>
    <meta name="keywords" content={config.keywords}></meta>
    <meta name="description" content={config.description}></meta>
    <meta name="og:title" content={config.title}></meta>
    <meta http-equiv="x-dns-prefetch-control" content="on"></meta>
    <link rel="dns-prefetch" href={`//${config.hostname}`} />
  </Helmet>
  <Header />
  <div style={{ margin: `3rem auto`, display: 'flex', maxWidth: 1350, padding: `0 1rem` }}>
    <section style={{ flex: 1 }}>
      {children}
    </section>

    <aside style={{ flexBasis: 280, marginLeft: 20 }}>
      <SiderBar />
    </aside>
  </div>
  <Footer />
</>)

