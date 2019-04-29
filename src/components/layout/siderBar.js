import React from 'react'
import styles from './layout.module.css'

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

const Profile = ({ title }) => {
  return <>
    <div className={styles.siderItem}>
      <h3 className={styles.siderTitle}>{title}</h3>
      <div className={styles.siderContent}>
        <dt>
          <dl>网名：drcus | 迪卡斯 | 潜默</dl>
          <dl>职业：Web Enginner</dl>
          <dl>Email：603684240@qq.com</dl>
          <dl>QQ交流群：975174379</dl>
          {/* <dl>Email：wyzandwqm@gmail.com</dl> */}
          <dl>微信：</dl>
          <dl align="center">
            <img style={{width: '60%'}} src="/images/site-icons/drcus.png" />
          </dl>
        </dt>
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
        <Profile title="我的名片" />

        <Bookmark 
          title="书签"
          links={[
            { text: 'Web前端技能', title: '', link: 'https://www.qdskill.com' },
            { text: 'WiKiHow', title: '值得每日一看', link: 'https://zh.wikihow.com/%E9%A6%96%E9%A1%B5' },
            { text: '设计导航', title: '', link: 'http://hao.shejidaren.com/' },
            { text: '凹凸实验室', title: '', link: 'https://aotu.io/' },
            { text: '大咖说', title: '', link: 'http://www.itdks.com/' },
            { text: '网讯博客', title: '', link: 'http://www.wonxun.net/' },
            { text: '如何成功', title: '英文', link: 'http://blog.samaltman.com/how-to-be-successful' },
            { text: '程序变量取名', title: '取名', link: 'https://unbug.github.io/codelf/' },
          ]}
        />

        <Bookmark 
          title="学习"
          links={[
            { text: '33个概念', title: 'JavaScript开发者应懂的33个概念 ', link: 'https://github.com/stephentian/33-js-concepts' },
            {
              text: '30 seconds of code', 
              title: 'Curated collection of useful JavaScript snippets that you can understand in 30 seconds or less.', 
              link: 'https://30secondsofcode.org/',
            },
            { text: '实验楼', title: '实验楼前端频道 ', link: 'https://www.shiyanlou.com/courses/?category=Web%E5%89%8D%E7%AB%AF&course_type=all&tag=all&fee=all' },
          ]}
        />
        
      </div>
    )
  }
}

export default SiderBar
