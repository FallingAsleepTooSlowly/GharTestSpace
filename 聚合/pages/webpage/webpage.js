const app = getApp()

// pages/webpage/webpage.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        webUrl: null
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

        /* -------------------测试代码----------------- */
        //获取到上个页面传递过来的参数
        const evenChannel = this.getOpenerEventChannel()
        evenChannel.on('toWebPage', (res) => {
            console.log('webPage: res===>', res)
        })
        //获取页面栈
        this.getPagesParam()
        /* --------------------------------------------- */

        //跳转地址
        console.log('app=========>', app)
        console.log('获取到的url：', app.globalData.webUrl)
        this.setData({ webUrl: app.globalData.webUrl })
    },
    //获取页面栈的测试方法
    getPagesParam(){
        var listData = getCurrentPages();
        console.log('listData===>', listData[0].data)
    }

})