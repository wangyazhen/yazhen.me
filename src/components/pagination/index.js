import React from 'react'
import { Link } from 'gatsby'

const NavLink = props => {
  if (props.className.indexOf('active') > -1) {
    return <span className={props.className}>{props.text}</span>
  }
  if (!props.test) {
    return <Link className={props.className} to={props.url}>{props.text}</Link>
  }
  return null
}

export default ({ pageContext }) => {
  const { index, first, last, pageCount } = pageContext

  const previousUrl = index - 1 === 1 ? '' : (index - 1).toString()
  const nextUrl = (index + 1).toString()

  const isCurrentPageClass = idx => idx === index ? 'pageItem active' : 'pageItem'
  const more = index < 2
  const isEnd = index === pageCount || pageCount - 1 === index

  return (
    <div className="paginationBox">
      <NavLink className="previousLink" test={first} url={previousUrl} text="« Prev" />
      <div className="pageLink">
        <NavLink className={isCurrentPageClass(1)} test={first} url={``} text="1" />
        {index - 2 > 1 &&  <span className="pageItem static">...</span>}          
        {
          more ? <>
          <NavLink className={isCurrentPageClass(index + 1)} test={false} url={index + 1 + ''} text={index + 1} />
          <NavLink className={isCurrentPageClass(index + 2)} test={false} url={index + 2 + ''} text={index + 2} />
          <NavLink className={isCurrentPageClass(index + 3)} test={false} url={index + 3 + ''} text={index + 3} />
          </> : <>
          <NavLink className={isCurrentPageClass(index - 1)} test={index === 2 } url={index - 1 + ''} text={index - 1} />
          <NavLink className={isCurrentPageClass(index )} test={false} url={index + ''} text={index} />
          <NavLink className={isCurrentPageClass(index + 1)} test={last} url={index + 1 + ''} text={index + 1} />
          </>
        }
        {
          !isEnd && <>
          <span className="pageItem static">...</span>
          <NavLink className={isCurrentPageClass(pageCount)} test={last} url={`${pageCount}`} text={pageCount} />
          </>
        }
      </div>
      <NavLink className="nextLink" test={last} url={nextUrl} text="Next »" />
    </div>    
  )
}