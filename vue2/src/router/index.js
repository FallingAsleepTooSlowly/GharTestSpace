import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'

Vue.use(Router)

function homeBeforEnter(to, from, next){
    if(process.env.NODE_ENV == "development"){
        return next()
    }else{
        next('/')
    }
}

let router = new Router({
    mode: 'hash',//'history',
    routes: [
        { path: '/', name: 'Home', component: Home, beforeEnter: homeBeforEnter }
    ]
})

router.beforeEach((to, from, next) => {
    next()
})

export default router
