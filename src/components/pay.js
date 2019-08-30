import React from "react"

class Pay extends React.Component {
  state = {
    isShow: false,
  }

  isMobile = () => {
    return typeof window === 'object' ? window.innerWidth < 800 : false
  }

  changeShow = () => this.setState({ isShow: !this.state.isShow })

  render() {
    const { isShow } = this.state
    const isMobile = this.isMobile()

    return (
      <div className="pay-box">
        <p className="pay-title">厚颜一下 ~^_^~</p>
        <p>
          <a className="pay-btn" onClick={this.changeShow}>赏赐</a>
        </p>
        
        <img style={{ display: isShow ? 'inline-block' : 'none', width: isMobile ? "90%" : "50%" }} src="/images/site-icons/pay.png" />
      </div>)
  }
}

export default Pay
