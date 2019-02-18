import React from "react"
import Header from './header'
import Footer from './footer'

export default ({ children }) => (<>
  <Header />
  <div style={{ margin: `3rem auto`, maxWidth: 1050, padding: `0 1rem` }}>
    {children}
  </div>
  <Footer />
</>)

