const app = getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo: null,
        userCode: null
    },

    // 获取用户的当前设置，返回值中只会出现小程序已经向用户请求过的权限
    getSetting(){
        wx.getSetting({
            success: res => {
                console.log('getSetting的res====>', res)
            }
        })
    },
    // 获取用户的code
    getUserCode(){
        wx.login({
            success: res => {
                // 发送 res.code 到后台换取 openId, sessionKey, unionId
                this.setData({ userCode: res.code })
            }
        })
    },

    // 获取用户信息，箭头函数没有自己的this
    getUserProfile() {
        wx.getUserProfile({
            desc: "声明获取用户个人信息后的用途",
            success: res => {
                console.log('getUserProfile的res====>', res)
                this.setData({ userInfo: res.userInfo })
                app.globalData.userInfo = res.userInfo
                console.log('userInfo===>', this.data.userInfo)
                this.getUserID()

                // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                // 所以此处加入 callback 以防止这种情况
                if (this.userInfoReadyCallback) {
                    this.userInfoReadyCallback(res)
                }
            },
            fail: function (err) {
                console.log("获取失败: ", err)
            }
        })
    },
    // 获取用户的id信息
    getUserID(){
        var theURL='https://api.weixin.qq.com/sns/jscode2session?appid='+app.globalData.appID+'&secret='+app.globalData.appSecret+'&js_code='+this.data.userCode+'&grant_type=authorization_code'
        console.log('theURL===>', theURL)
        wx.request({
          url: theURL,
          data: {},
          method: 'GET',
          success: res => {
              console.log('获取用户ID信息===>', res)
          }
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        this.getSetting()
        this.getUserCode()
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})