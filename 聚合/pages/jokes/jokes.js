const CommonApi = require('../../api/common.js')

// pages/jokes/jokes.js
Page({
    data: {
        jokeList: null
    },

    onLoad: function (options) {
        this.getNewJokes()
    },

    //最新笑话
    getNewJokes(){
        var _self = this
        CommonApi.getNewJokes({
            success: res => {
                console.log('获取到的最新笑话数据:', res)
                _self.setData({ jokeList: res.data.result.data })
            }
        })
    }
})