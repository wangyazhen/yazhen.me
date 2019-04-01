import React from "react"

class Pay extends React.Component {
  state = {
    ishow: false,
  }

  changeShow = () => this.setState({ ishow: !this.state.ishow })

  render() {
    return (
      <div className="pay-box">
        <p className="pay-title">支持一下吧 ~^_^~</p>
        <p>
          <a className="pay-btn" onClick={this.changeShow}>赏赐</a>
        </p>
        
        <img style={{ display: this.state.ishow ? 'inline-block' : 'none', width: "50%" }} src="/images/site-icons/pay.png" />
      </div>)
  }
}

export default Pay
