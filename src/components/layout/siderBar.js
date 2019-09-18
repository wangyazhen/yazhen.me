import React from 'react'
import { Bookmark, Profile, HotCard } from './side'


class SideBar extends React.Component {

  state = {
    isPlaying: true,
  }


  render() {
    const { isPlaying, musicUrl } = this.state

    return (
      <div id="side-bar">
        <HotCard />

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
            { text: '问答库', title: '', link: 'https://www.asklib.com/' },
            { text: '如何成功[英]', title: '英文', link: 'http://blog.samaltman.com/how-to-be-successful' },
            { text: '程序变量取名', title: '取名', link: 'https://unbug.github.io/codelf/' },
            { text: '免费商用字体', title: '字体', link: 'https://www.100font.com/' },
          ]}
        />

        <Bookmark 
          title="学习"
          links={[
            { text: '免费书籍', title: 'GitHub上的书籍', link: 'https://github.com/EbookFoundation/free-programming-books/blob/master/free-programming-books-zh.md' },
            { text: 'Best of Js', title: 'Best of Js ', link: 'https://bestofjs.org/' },
            { text: '33个概念', title: 'JavaScript开发者应懂的33个概念 ', link: 'https://github.com/stephentian/33-js-concepts' },
            {
              text: '30 seconds of code', 
              title: 'Curated collection of useful JavaScript snippets that you can understand in 30 seconds or less.', 
              link: 'https://30secondsofcode.org/',
            },
            { text: '实验楼', title: '实验楼前端频道 ', link: 'https://www.shiyanlou.com/courses/?category=Web%E5%89%8D%E7%AB%AF&course_type=all&tag=all&fee=all' },
          ]}
        />

        <Bookmark
          title="友情链接(别人博客)"
          links={[
            { text: 'Surmon', title: '司马萌', link: 'https://surmon.me/' },
            { text: '蜗牛老湿', title: '蜗牛老湿', link: 'http://shengxinjing.cn/' },
            { text: '勇·周', title: '勇·周 ', link: 'http://www.zhouyong123.com' },
            { text: '大前端', title: 'da', link: 'http://www.daqianduan.com' },
          ]}
        />
        
      </div>
    )
  }
}

export default SideBar
