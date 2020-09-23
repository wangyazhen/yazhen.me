

import { extend } from 'umi-request'

const request = extend({
  prefix: '/api',
  timeout: 2000,
  maxCache: 10,
})

export default request
