import { mapMutations, mapState, mapGetters } from 'vuex'

export default{
    install(Vue, options){
        Vue.mixin({
            computed:{
                ...mapState(['userName', 'passWord']),
                ...mapMutations(['setUserName', 'setPassWord']),
                ...mapGetters(['userName'])
            },
            methods:{
                
            }
        })
    }
}