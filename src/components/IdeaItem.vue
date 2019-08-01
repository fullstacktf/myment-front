<template>
  <div class="itemContainer">{{ name }}</div>
</template>

<script>
export default {
  name: 'IdeaItem',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.itemContainer {
  color: white;
  margin: 50px;
  width: 80%;
  height: 100px;
  background: black;
}
</style>
