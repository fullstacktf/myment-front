<template>
  <div class="wrapper">
    <section class="buttony">
      <div class="columns is-desktop">
        <div class="column is-full">
          <a class="button is-large is-rounded is-danger is-full-width">Click Me</a>
        </div>
      </div>
    </section>
    <section class="columns is-desktop">
      <div class="column is-one-fifth is-rounded">column 1</div>
      <div class="column">column 2</div>
      <div class="column">column 3</div>
    </section>
  </div>
</template>

<script >
export default {
  methods: {
    clickMe() {
      this.$buefy.notification.open('Clicked!!');
    },
  },
};
</script>

<style scoped>
.buttony {
}
.columns {
  width: 100%;
  height: 100px;
  margin: 20px;
}

.column {
  margin: 20px;
  background-color: blueviolet;
}
</style>
