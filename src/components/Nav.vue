<template>
<div class="Nav">
    <p class="Nav-title">
        Mdr-Node-Tutorial
    </p>
</div>
<!---->
<router-view></router-view>
</template>

<script setup>

</script>

<style scoped>
.Nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 1vw;
}
.Nav-title {
    margin-left: 3vw;
    margin-right: 5vw;
    font-size: 2vw;
    line-height: 1.5vw;
    font-family: 'JetBrains Mono SemiBold', serif;
    color: rgb(35, 151, 64);
}

</style>