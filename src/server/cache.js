// import request from "../utils/request"
const request = require('../utils/request')

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const _HOST = 'http://'

let __article_list = []

const initArticleCache = async () => {
  await request.get('')
  .then(res => {
    console.log('返回：', res)
  })
}

initArticleCache()
