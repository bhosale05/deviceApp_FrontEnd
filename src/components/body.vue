<template>
    <div class='container'>
        <slot></slot>
    </div>
</template>
<script>

export default {
    name: "body"
}
</script>
<style scoped>
    .container{
        height: 100%;
        width: 100%;
    }
</style>