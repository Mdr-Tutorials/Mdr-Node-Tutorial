<template>
    <el-row type="flex" justify="center" align="middle">
      <div :class="['button', { 'inactive': props.mods === false }]">
        {{ props.msg }}
      </div>
    </el-row>
  </template>
  
  <script setup>
  const props = defineProps(["mods", "msg"]);
  </script>
  
  <style scoped>
  .button {
    border: none;
    background: linear-gradient(135deg, rgb(35, 151, 64), rgb(50, 200, 90));
    color: white;
    border-radius: 20px;
    font-size: 1.5vw;
    width: 180px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
  
  .button:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }
  
  .inactive {
    background: white; 
    color: rgb(35, 151, 64);
    background-clip: text; 
    -webkit-background-clip: text; 
    text-fill-color: transparent;
  }
  </style>
  