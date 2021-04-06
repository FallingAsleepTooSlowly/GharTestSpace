<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>Essential Links</h2>
        <div>123456</div>

        <test-component :test='"123456"' dewf='4554' class="asd" :qwer='"789798"'></test-component>
    </div>
</template>

<script>
import TestComponent from '@/components/TestComponent.vue'
export default {
    name: 'home',
    components: {'test-component': TestComponent },
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            theTest: '123456'
        }
    },
    mounted () {
        console.log('the process: ', process)
    },
    methods: {

    }
}
</script>

<style scoped>
    h1, h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>
        TestComponent