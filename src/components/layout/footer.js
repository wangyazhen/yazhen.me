import React from 'react'
// import footer_bg from './footer_bg.png'
import styles from './footer.module.css';

export default () => {
  return (
    <footer className={styles.footer}>
      {/* <img src={footer_bg} alt="页脚" /> */}
      <p className={styles.copyright}>
      Powered by <a href="https://www.gatsbyjs.org/" rel="noopener noreferrer" target="_blank">Gatsby</a>&nbsp;&nbsp;
      Copyright ©  2019. 
      <br className="footer_br" />
      All Rights Reserved. <a href="https://yazhen.me" rel="noopener noreferrer" target="_blank" title="王亚振">王亚振</a>
      <br className="footer_br" />
      &nbsp;&nbsp;&nbsp;<a style={{textDecoration: "underline"}} href="http://www.miitbeian.gov.cn/" target="_blank">豫ICP备16008867号</a>
      </p>
    </footer>
  )
}
// export default () => {
//   return (
//     <footer id="footer" className={styles.footer}>
//       <div class="inner">
//         <div id="footer-copyright">
//           © 2019 <a href="https://www.gatsbyjs.org/" target="_blank">Hexo</a><br/>
//           Documentation licensed under <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>.
//         </div>
//         <div id="footer-links">
//           <a href="https://twitter.com/hexojs" class="footer-link" target="_blank">
//             <svg aria-hidden="true" version="1.1">
//             <path d="M18 22.082v-1.649c2.203-1.241 4-4.337 4-7.432 0-4.971 0-9-6-9s-6 4.029-6 9c0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h28c0-4.030-5.216-7.364-12-7.918z"></path>
//             </svg>
//           </a>
//           <a href="https://github.com/hexojs/hexo" class="footer-link" target="_blank"><i class="fa fa-github-alt"></i></a>
//         </div>
//       </div>
//     </footer>
//   )
// }