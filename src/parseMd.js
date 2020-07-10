const fs = require('fs')
const path = require('path')

const filePath = path.resolve('./cmp')

// fs.writeFileSync('./results', 'file')
// let fileList = []
let num = 1
// 121 篇文章
displayFiles(filePath, (content) => {
  // console.log('文件内容长度:', content.length)
  const file = parseMdToArray(content)
  // console.log('写入：', num ++)
  let con = JSON.stringify(file) + ',\n'
  fs.writeFileSync('./results.json', con, { encoding: 'utf8', mode: 438, flag: 'a' })
})

// fs.readFile('./test.md', 'utf-8', (err, file) => {
//   if (err) {
//     throw err
//   }
//   // console.log('获取的:', file)
//   // console.log('获取的:', file)
//   console.log('文章数组:', parseMdToArray(file))
// })



function displayFiles(filePath, handleFile) {
  // 根据文件路径读取文件，返回文件列表
  fs.readdir(filePath, (err, files) => {
    if (err) throw err
    files.forEach(filename => {
      // 获取绝对路径
      const fileDir = path.join(filePath, filename)
      // 根据文件路径获取文件信息
      fs.stat(fileDir, ((err1, stats) => {
        if (err1) throw err1
        const isFile = stats.isFile()
        const isDirectory = stats.isDirectory()
        if (isFile) {
          // console.log(fileDir)
          const fileContent = fs.readFileSync(fileDir, 'utf-8')
          handleFile && handleFile(fileContent)
        }
        if (isDirectory) {
          // 递归，如果是文件夹，就继续遍历该文件夹下面的文件
          displayFiles(fileDir, handleFile)
        }
      }))
    })
  })
}


// 返回对象
function parseMd(file) {
  const strarr = file.split('---')
  const content = strarr[2]
  return {
    ...getTitle(strarr[1]),
    content
  }

  function getTitle(str) {
    let obj = {}
    str.split('\n').forEach(v => {
      if (v) {
        let kv = v.split(':')
        const value = v.substr(v.indexOf(':')+1).trim()
        // 去掉多余的引号
        obj[kv[0]] = value.replace(/\'|\"/g, '')
      }
    })
    return obj
  }
}


// 返回数组
function parseMdToArray(file) {
  const strarr = file.split('---')
  const content = strarr[2]
  return [
    ...getTitle(strarr[1]),
    content
  ]

  function getTitle(str) {
    let arr = []
    str.split('\n').forEach(v => {
      if (v) {
        let kv = v.split(':')
        const value = v.substr(v.indexOf(':')+1).trim()
        // 去掉多余的引号
        arr.push(value.replace(/\'|\"/g, ''))
      }
    })
    return arr
  }
}
