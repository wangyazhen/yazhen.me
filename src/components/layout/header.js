import React from 'react'
import {Link} from 'gatsby'
import styles from './header.module.css'
import Logo from './header_logo.png';

export default () => (
  <header className={styles.header}>
    <div>
      <div className={styles.imglogo}>
        <Link to="/"><img style={{borderRadius: '50%'}} src={Logo} alt="Drcus | 王亚振" title="Drcus | 王亚振" /></Link>
      </div>
      <div className={styles.textlogo}>
        <h1 className="site-name"><a href="/" title="Drcus | 王亚振">Drcus | 潜默</a></h1>
        <h2 className="blog-motto">坚持做更好…………</h2>
      </div>
      <div className="navbar">
        <span className="navbutton navmobile" title="菜单">
        </span>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li><Link to="/">主页</Link></li>
          <li><Link to="/tags">标签</Link></li>
          {/* <li><Link to="/image-view">Picture</Link></li> */}
          <li>
            <form className="search" action="//google.com/search" method="get" acceptCharset="utf-8">
              <input type="text" className={styles.searchInput} name="q" autoComplete="off" maxLength={20} placeholder="搜索" />
              <input type="hidden" name="q" defaultValue="site:yazhen.me" />
            </form>
          </li>
        </ul>
      </nav>			
    </div>
  </header>
)
