const CommonApi = require('../../api/common.js')
const app = getApp()

//index.js
Page({
    data: {
        wxList: null
    },

    onLoad: function () {
        this.getWxList()
    },
    onReady: function () {
        console.log('app==>', app)
    },

    //获取微信精选数据
    getWxList(num){
        var _self = this
        var pageNum = 1
        if(num){
            pageNum = num
        }
        CommonApi.getWxList({
            data:{
                pno: pageNum
            },
            success: res => {
                console.log('获取到的微信精选数据:', res)
                _self.setData({ wxList: res.data.result.list })
            }
        })
    },

    //点击标题跳转到外部链接
    turnToUrl(e){
        console.log('点击标题返回值:', e)
        app.globalData.webUrl = e.target.dataset.item.url
        wx.navigateTo({
            url: '../webpage/webpage'
            // url: '../webpage/webpage?url=' + e.target.dataset.item.url.split("?")[0] + '&' + e.target.dataset.item.url.split("?")[1]
        })
    }
})
