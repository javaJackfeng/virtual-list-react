const Mock = require('mockjs')

//get请求：模拟分页数据
module.exports = Mock.mock('/list', 'get', () => {
    const ret = Mock.mock({
        'list|2000':[{'id|+1':1, title:'@ctitle'}]
    })
    return {
        status:200,
        data:ret
    }
})
