import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    //保存全局数据
    state: {
        userName: null,
        passWord: null
    },

    //设置全局数据的赋值，是同步函数，因为必须捕捉前后的快照
    mutations: {
        setUserName(state, v){
            state.userName = v
        },
        setPassWord(state, v){
            state.passWord = v
        }
    },

    //类似于mutations，但可以包含异步操作，接受的第一个参数为有相同方法和属性的Store对象，触发方式store.dispatch('testActions')
    actions: {
        testActions({ commit, state }, callback){
            commit('setUserName', 'testUserName')
        }
    },

    //类似于计算属性，返回值会根据它的依赖被缓存起来，也方便进行过滤
    getters: {
        userName: state => {
            return state.userName
        }
    }

})