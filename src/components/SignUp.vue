<template lang="html">
    <section>
        <b-field label="Name">
            <b-input v-model="name"></b-input>
        </b-field>

        <b-field label="Email">
            <b-input type="email"
                value="john@"
                maxlength="30">
            </b-input>
        </b-field>

        <b-field label="Username"
            type="is-success"
            message="This username is available">
            <b-input value="johnsilver" maxlength="30"></b-input>
        </b-field>

        <b-field label="Password">
            <b-input type="password"
                value="iwantmytreasure"
                password-reveal>
            </b-input>
        </b-field>
    </section>
</template>

<script>
export default {
  name: 'FormExample',
};
</script>