<template>
    <div class="test-component">
        {{test}}
    </div>
</template>

<script>

export default {
    data() {
        return {

        }
    },
    props: {
        test: {
            type: String,
            default: 'default'
        }
    },
    mounted(){
        console.log('the attrs===>', this.$attrs)
    }
}
</script>

<style scoped>
    .test-component{
        border: 2px solid;
        margin-top: 20px;
    }
</style>
