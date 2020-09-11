import React, { useState } from "react"

const isMobile = () => typeof window === 'object' ? window.innerWidth < 800 : false

function Pay() {
  const [isShow, setShow] = useState(false)

  return (
    <div className="pay-box">
      <p className="pay-title"> ~^_^~  一片小花园 ？</p>
      <p>
        <a className="pay-btn" onClick={() => setShow(!isShow)}>赏赐</a>
      </p>

      <img style={{ display: isShow ? 'inline-block' : 'none', width: isMobile() ? "90%" : "50%" }} src="/images/site-icons/pay.png" />
    </div>
  )
}

export default Pay
