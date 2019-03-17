import React from 'react'
import {Link} from 'gatsby'
import styles from './header.module.css'
import Logo from './header_logo.png'
import Music from './music'
import config from '../../utils/config'

export default () => (
  <header className={styles.header}>
    <div>
      <Music />
      <div className={styles.imglogo}>
        <Link to="/"><img style={{borderRadius: '50%'}} src={Logo} alt={config.title} title={config.title} /></Link>
      </div>
      <div className={styles.textlogo}>
        <h1 className="site-name"><Link to="/">{config.title}</Link></h1>
        <h2 className="blog-motto">{config.subtitle}</h2>
      </div>
      <div className="navbar">
        <span className="navbutton navmobile" title="菜单">
        </span>
      </div>
      <nav className={styles.nav}>
        <ul>
          {config.menuNavs.map(item => <li key={item.link}><Link to={item.link}>{item.title}</Link></li>)}          
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
