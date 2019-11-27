import React from "react"

class BaiDu extends React.PureComponent {
  componentDidMount() {
    let hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?dcb23e902a3f942199a78641f2eda2db";
    const s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
  }

  render() {
    return null
  }
}
export default BaiDu
