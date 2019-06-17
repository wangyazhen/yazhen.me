import React from "react";
import styles from './side.module.css'

const Bookmark = ({ title, links = [] }) => {
  return <>
    <div className={styles.siderItem}>
      <h3 className={styles.siderTitle}>{title}</h3>
      <div className={styles.siderContent}>
        {
          links.map(item => <a
            key={item.link}
            className={styles.slideLink}
            href={item.link} rel="friend noopener"
            title={item.title || item.text}
            target="_blank"
          >{item.text}</a>) }
      </div>
    </div>
  </>
}

export default Bookmark