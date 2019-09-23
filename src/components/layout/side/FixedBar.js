import React from "react";
import icon from './back-to-top.svg'


const FixedBar = ({  }) => {
  const toTop = () => {
    window.scrollTo(0, 0)
  }
  const toBottom = () => {
    window.scrollTo(0, window.document.body.offsetHeight)
  }
  return <div className="fixed-bar">
    <div className="back-top" onClick={toTop}>
      <img src={icon} />
    </div>
    <div className="back-top bottom" onClick={toBottom}>
      <img src={icon} />
    </div>
  </div>
}

export default FixedBar