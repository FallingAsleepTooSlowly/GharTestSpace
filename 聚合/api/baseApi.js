let lggRequest = require('request.js')

let BaseApi = {
  baseUrl: '',
  request: function(config) {
    lggRequest.request(config)
  },

  list: function(config) {
    config.url = this.baseUrl + '/list'
    lggRequest.request(config)
  },

  addOrUpdate: function (config) {
    config.url = this.baseUrl + '/addOrUpdate'
    config.method = 'post'
    lggRequest.request(config)
  }
}

module.exports = BaseApi