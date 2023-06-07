/*
 * @Author: 王亚振
 * @Date: 2020-03-12 11:46:27
 * @LastEditors: 王亚振
 * @LastEditTime: 2023-06-07 15:25:52
 * @FilePath: /yazhen.me/src/components/layout/footer.js
 */
import React from 'react'
import styles from './footer.module.css';

export default () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        Powered by <a href="https://www.gatsbyjs.org/" rel="noopener noreferrer" target="_blank">Gatsby</a>&nbsp;&nbsp;
        Copyright ©  2023.
        <br className="footer_br" />
        All Rights Reserved. <a href="https://yazhen.me" rel="noopener noreferrer" target="_blank" title="王亚振">王亚振</a>
        <br className="footer_br" />
        &nbsp;&nbsp;&nbsp;<a style={{ textDecoration: "underline" }} href="http://www.beian.miit.gov.cn" target="_blank">豫ICP备16008867号</a>
      </p>
    </footer>
  )
}
