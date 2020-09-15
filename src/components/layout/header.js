import React, {useState} from 'react'
import {Link} from 'gatsby'
import styles from './header.module.css'
import Logo from './header_logo.png'
import Music from './music'
import TongJi from './tongji'
import config from '../../utils/config'

const isMobile = () => typeof window === 'object' ? window.innerWidth < 768 : false

export default function Header() {
  const [menuActive, setMenuActive] = useState(false)
  
  return (
    <header className={styles.header}>
      <div>
        <Music />
        <TongJi />
        <div className={styles.imglogo}>
          <Link to="/"><img style={{borderRadius: '50%'}} src={Logo} alt={config.title} title={config.title} /></Link>
        </div>
        <div className={styles.textlogo}>
          <h1 className="site-name"><Link to="/">{config.title}</Link></h1>
          <h2 className="blog-motto">{config.subtitle}</h2>
        </div>
        {
          isMobile() &&
          <div
            className="navbar header-navbar"
            style={{backgroundColor: menuActive ? '#e05f5f' : '#b7b6b6'}}
            onClick={() => setMenuActive(!menuActive)}
          >
            <span className="navbutton navmobile" title="菜单">菜单</span>
          </div>
        }
        <nav className={styles.nav} style={{display: isMobile() && !menuActive ? 'none' : 'block'}}>
          <ul>
            {config.menuNavs.map(item => <li key={item.link}><Link to={item.link}>{item.title}</Link></li>)}
            <li className="search-li-item" style={{display: isMobile() ? 'none' : 'block'}}>
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
}
