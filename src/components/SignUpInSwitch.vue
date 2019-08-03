<template>
  <section>
    <b-switch :rounded="isRounded" :outlined="isOutlined" is-large>Sign In</b-switch>
  </section>
</template>

<script scoped>
import { Stream } from 'stream';
export default {
  name: 'SignUpInSwitch',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  methods: {
    hello() {
      console.log('hello');
    },
  },
  data() {
    return {
      isRounded: false,
      isOutlined: false,
    };
  },
};
</script>