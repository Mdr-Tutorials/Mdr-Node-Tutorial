<template>
  <el-row type="flex" justify="center" align="middle">
    <div class="cor">
    <div :class="['button', { 'inactive': props.mods === false }]">
      {{ props.msg }}
    </div>
  </div>
  </el-row>
</template>

<script setup>
const props = defineProps(["mods", "msg"]);
</script>

<style scoped>
.cor {
  display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2vw;
    margin: 2vw 0;
}
.button {
  border: none;
  background: rgb(35, 151, 64);
  color: white;
  border-radius: 20px;
  font-size: 1.5vw;
  width: 180px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

}

.button:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  background: white;
  color:rgb(35, 151, 64) ;
  
}

.inactive {
  background: white; 
  color: rgb(35, 151, 64);
  background-clip: text; 

}
.inactive:hover {
    background: rgb(35, 151, 64);
    color: white;
  }
</style>
