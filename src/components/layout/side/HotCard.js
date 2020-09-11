import styles from "./side.module.css"
import React from "react"

class HotCard extends React.Component{
  state = {
    data: [],
  }
  componentDidMount() {
    fetch('/apijson/todayhot.json').then(res => res.json())
    .then(result => {
      this.setState({ data: result.data })
    })
  }
  render() {
    const { data } = this.state

    return <>
      <div className={styles.siderItem}>
        <h3 className={styles.siderTitle}>
          需要看会新闻吗
          {/*<span style={{fontSize: 12, color: '#ddd'}}>(仅作外链使用)</span>*/}
        </h3>
        <div className={styles.siderContent}>
          <ul style={{ listStyle: 'none', margin: 0 }}>
            {
              data.map((item, idx) => <li key={item.title}>
                <a href={item.url} target="_blank" className={styles.hotLink}>
                  <span className={`${styles.num} ${idx < 3 ? styles.hot : ''}`}>{idx + 1}</span>
                  <span className={styles.title}>{item.title}</span>
                  <span className={styles.subTitle}>{item.type}</span>
                </a>
              </li>)
            }
          </ul>
        </div>
      </div>
    </>
  }
}


export default HotCard