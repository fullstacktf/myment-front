<script>
export default {
  name: "Main"
};
</script>

<template>
  <div>
    <div class="welcome">
      <img src="../../public/assets/M.png" alt="myment-logo" class="logo" />
      <span>Welcome to your plan!</span>
    </div>
    <div class="container"></div>
  </div>
</template>



<style>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1000px;
  background-color: #255060;
}
.logo {
  width: 150px;
  height: 150px;
}
.container {
  width: 990px;
  height: 900px;
  background-color: #79f0a5;
}
.welcome {
  font-family: roboto, sans-serif;
}
</style>
