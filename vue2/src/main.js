// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'
import Init from './utils/init'
import Global from './utils/global'

Init()
Vue.config.productionTip = false      //消息提示的环境配置，设置为开发环境或者生产环境
Vue.use(Global)

/* eslint-disable no-new */
const app = new Vue({
    el: '#app',
    store,
    router,
    components: { App },
    template: '<App/>'
})

// const renderer = require('vue-server-renderer').createRenderer()

// 将vue实例渲染成html
// renderer.renderToString(app, (err, html) => {
//     if (err) throw err
//     console.log('the html====>', html)
// })

// 在 2.5.0+，如果没有传入回调函数，则会返回 Promise：
// renderer.renderToString(app).then(html => {
//     console.log(html)
// }).catch(err => {
//     console.error(err)
// })
