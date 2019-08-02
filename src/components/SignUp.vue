<template lang="html">
  <sui-form>
    <sui-form-field>
      <label>First Name</label>
      <input placeholder="introduce name" >
    </sui-form-field>
    <sui-form-field>
      <label>Last Name</label>
      <input placeholder="introduce lastname" >
    </sui-form-field>
    <sui-form-field>
      <label>Your Nickname</label>
      <input placeholder="introduce nickname" >
    </sui-form-field>

    <sui-form-field>
      <label>Password</label>
      <input placeholder="**********" >
    </sui-form-field>

    <sui-form-field>
      <label>Repeat Password</label>
      <input placeholder="**********" >
    </sui-form-field>

    <sui-form-field>
      <sui-checkbox label="I agree to the Terms and Conditions" />
    </sui-form-field>
    <sui-button type="submit">Sign Up</sui-button>
  </sui-form>
</template>

<script>
export default {
  name: 'FormExample',
};
</script>