import React from "react"
import Helmet from 'react-helmet'

export default ({ title, description, keywords }) => (<>
  <Helmet title={title}>    
    <meta name="keywords" content={keywords}></meta>
    <meta name="description" content={description}></meta>    
  </Helmet>  
</>)
