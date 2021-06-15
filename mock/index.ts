import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/user',
    method: 'get',
    response: ({}) => {
      return {
        status: '请求成功',
        code: 200,
        data: {
          name: '@cname',
          age: '@Integer(20, 50)',
        },
      }
    },
  },
] as MockMethod[]
