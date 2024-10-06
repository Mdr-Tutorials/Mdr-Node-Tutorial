<template>
<div class="demo_index">
    <span class="content">A </span>
    <br>
    <span class="NAT">Node Tutorial</span>
    <!--一个Node教程-->
    <br>
    <span class="NAT">A Very Good And Free Tutorial!!!</span>
    <!--一个很好且免费的教程-->
    <br>
    <span>
        <a :href=Mdr_C_Tutorial_url>For Mdr-C-Tutorial</a>
    </span>
    <br>
    <!--按钮-->
    <div class="button-container">
    <RouterLink to="#">
      <Button v-bind:mods="true" msg="On Start!" />
    </RouterLink>
    <!---->
    <a href="https://github.com/Mdr-Tutorials/Mdr-Node-Tutorial">
      <Button v-bind:mods="false" msg="Go At Github" />
    </a>
    </div>
</div>
</template>

<script setup>
import Button from "@/components/index/Button.vue"

const Mdr_C_Tutorial_url = "http://http://localhost:3000/"
</script>

<style scoped>
.demo_index {
    text-align: center;
}
.content {
    font-size: 50px;
    color: rgb(35, 151, 64);
}
.NAT {
    font-size: 30px;
    color: rgb(29, 94, 45);
}
a {
    color: rgb(104, 118, 129);
}
.button-container {
  display: flex; 
  justify-content: center; 
  gap: 15px;
}
</style>

