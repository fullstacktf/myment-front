<template>
  <section>
    <b-field label="Username">
      <b-input maxlength="30"></b-input>
    </b-field>

    <b-field label="Password">
      <b-input type="password" password-reveal></b-input>
    </b-field>

    <input type="submit" class="button is-success" value="log in" />
  </section>
</template>

<script>
export default {
  name: 'Signin',
};
</script>

<style scoped>
a {
  margin-top: 40px;
  display: block;
  text-decoration: none;
  color: white;
}
</style>
