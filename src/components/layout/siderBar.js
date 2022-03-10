import React from 'react'
import { Bookmark, Profile, HotCard } from './side'


function SideBar() {
  return (
    <div id="side-bar">

      <Profile title="我的名片" />
      <Bookmark
        title="书签🔖"
        links={[
          { text: '大前端-网址导航', title: '大前端', link: 'http://www.daqianduan.com/nav' },
          // { text: 'WiKiHow', title: '值得每日一看', link: 'https://zh.wikihow.com/%E9%A6%96%E9%A1%B5' },
          { text: '设计导航', title: '', link: 'http://hao.shejidaren.com/' },
          { text: '问答库', title: '', link: 'https://www.asklib.com/' },
          // { text: '程序变量取名', title: '取名', link: 'https://unbug.github.io/codelf/' },
          { text: '免费商用字体', title: '字体', link: 'https://www.100font.com/' },
        ]}
      />

      {/*<Bookmark
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
        ]}
      />
      <HotCard />*/}

      <Bookmark
        title="友情链接"
        links={[
          { text: '博客列表', title: '中文独立博客列表', link: 'https://github.com/timqian/chinese-independent-blogs' },
          { text: 'Surmon', title: '司马萌', link: 'https://surmon.me/' },
          { text: 'LFhacks', title: 'LFhacks', link: 'https://www.lfhacks.com/' },
        ]}
      />

    </div>
  )
}

export default SideBar
