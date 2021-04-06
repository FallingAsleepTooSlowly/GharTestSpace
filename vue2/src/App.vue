<template>
    <div id="app">
        <img src="./assets/logo.png">
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'App',
    data(){
        return{

        }
    },
    mounted(){
        this.$store.dispatch('testActions')
        console.log('check the username===>', this.userName)
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
