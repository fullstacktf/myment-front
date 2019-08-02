<template>
  <sui-form>
    <sui-form-field>
      <label>Nickname</label>
      <input placeholder="introduce nickname" />
    </sui-form-field>

    <sui-form-field>
      <label>Password</label>
      <input placeholder="**********" />
    </sui-form-field>
    <sui-button type="submit">Sign In</sui-button>

    <a href="#">forgot pasword ?</a>
  </sui-form>
</template>

<script>
export default {
  name: 'Signin',
};
</script>

<style>
a {
  margin-top: 40px;
  display: block;
  text-decoration: none;
  color: white;
}
</style>
