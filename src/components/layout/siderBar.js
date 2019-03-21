import React from 'react'
import styles from './layout.module.css'

const Bookmark = () => {
  const links = [
    { text: 'Web前端技能', title: '', link: 'https://www.qdskill.com' },
    { text: 'WiKiHow', title: '值得每日一看', link: 'https://zh.wikihow.com/%E9%A6%96%E9%A1%B5' },
    { text: '设计导航', title: '', link: 'http://hao.shejidaren.com/' },
    { text: '凹凸实验室', title: '', link: 'https://aotu.io/' },
    { text: '网讯博客', title: '', link: 'http://www.wonxun.net/' },
    { text: '如何成功', title: '英文', link: 'http://blog.samaltman.com/how-to-be-successful' },
  ]
  return <>
    <div className={styles.siderItem}>
      <h3 className={styles.siderTitle}>书签</h3>
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

class SiderBar extends React.Component {

  state = {
    isPlaying: true,
  }


  render() {
    const { isPlaying, musicUrl } = this.state

    return (
      <div id="sider-bar">
        <Bookmark />
        
      </div>
    )
  }
}

export default SiderBar
