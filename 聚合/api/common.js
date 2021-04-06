let BaseApi = require('baseApi.js')

let CommonApi = Object.create(BaseApi, {
    // baseUrl: { value: '/api/customer' },
    //获取微信精选的数据
    getWxList: {
        value: function (config) {
            config.url = 'http://v.juhe.cn/weixin/query?key=fd2836175a41d51c276541a13577c8a5'
            this.request(config)
        }
    },
    //获取新闻头条的数据
    getNews: {
        value: function (config) {
            config.url = 'http://v.juhe.cn/toutiao/index?key=0a9dbc90631588f1233f0e962e92db60'
            this.request(config)
        }
    },
    //最新笑话
    getNewJokes: {
        value: function (config) {
            config.url = 'http://v.juhe.cn/joke/content/text.php?key=0a311ab75b842d97961789c5f6c3f77f'
            this.request(config)
        }
    },
    //随机获取笑话
    getRanDom: {
        value: function (config) {
            config.url = 'http://v.juhe.cn/joke/randJoke.php?key=0a311ab75b842d97961789c5f6c3f77f'
            this.request(config)
        }
    }
})

module.exports = CommonApi