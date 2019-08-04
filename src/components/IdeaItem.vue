<template>
  <div class="ideaWrapper">
    <b-collapse :open="false" aria-id="contentIdForA11y1">
      <button
        class="button is-rounded is-large is-fullwidth is-focusable"
        slot="trigger"
        aria-controls="contentIdForA11y1"
      >{{ name }}</button>
      <div class="notification">
        <div class="content">
          <h3>{{ start }}</h3>
          <p>{{ description }}</p>
          <h3>{{ end }}</h3>
        </div>
      </div>
    </b-collapse>
  </div>
</template>

<script>
export default {
  name: 'IdeaItem',
  props: {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
      default: 'no description added',
    },
    start: {
      type: Number,
      required: false,
      default: '00',
    },
    end: {
      type: Number,
      required: false,
      default: '00',
    },
  },
};
</script>

<style>
.ideaWrapper {
  padding: 20px;
  background-color: #a5bec4;
}
</style>
