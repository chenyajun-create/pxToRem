<template>
  <div id="app">
    <div class="pxToRem am-a">这是一个段落</div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.pxToRem {
  width: 60px;
  font-size: 16px;
}
.am-a {
  height: 60px;
}
</style>
