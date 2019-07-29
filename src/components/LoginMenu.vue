<template>
  <div class="menu">
    <form action="POST">
      <label for>Nick:</label>
      <input type="text" placeholder="El viajero" />
      <label for>Password:</label>
      <input type="text" placeholder="********" />
      <label for>Confirm password:</label>
      <input type="text" placeholder="--------" />
      <input type="submit" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginMenu',
};
</script>

<style>
.menu {
  display: flex;
  justify-content: left;
  align-items: left;
  width: 20vw;
  height: 100vh;
  background-color: #66838c;
  border: 4px solid black;
}
</style>
