<template lang="html">
    <section>
        <b-field label="Name">
            <b-input ></b-input>
        </b-field>

        <b-field label="Email">
            <b-input type="email"
                value="john@"
                maxlength="30">
            </b-input>
        </b-field>

        <b-field label="Username"
            message="This username is available">
            <b-input  maxlength="30"></b-input>
        </b-field>

        <b-field label="Password">
            <b-input type="password"
                password-reveal>
            </b-input>
        </b-field>

          <input type="submit" class="button is-success" value="sign up" />

    </section>
</template>

<script scoped>
export default {
  name: 'FormExample',
};
</script>
