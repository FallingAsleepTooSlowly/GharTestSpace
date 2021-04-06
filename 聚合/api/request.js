let app = getApp()
// const Constant = require('../constants/index.js')
// let userInfo = wx.getStorageSync(Constant.USER_INFO)
// let userModel = wx.getStorageSync(Constant.USER_MODEL)
module.exports = {
  request(config) {
    // config.header = config.header || {}
    // !userInfo && (userInfo = wx.getStorageSync(Constant.USER_INFO))
    // !userModel && (userModel = wx.getStorageSync(Constant.USER_MODEL))
    // if (!!userInfo && !!userModel) {
    //   config.header['authorization'] = userInfo.id + '_' + userModel.token
    // }
    // !config.data && (config.data = {})
    // config.data.business_id = app.globalData.bizId
    wx.request({
    //   url: app.globalData.host + config.url,
      url: config.url,
      header: config.header,
      data: config.data,
      method: config.method || 'GET',
      success: res => {
          if (res.data.error_code != 0) {
          wx.showModal({
            title: '',
            content: res.data.reason,
            showCancel: false,
            confirmColor: '#0270B0'
          })
        }
        typeof config.success === 'function' && config.success(res)
      }
    })
  }
}