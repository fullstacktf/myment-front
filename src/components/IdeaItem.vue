<template>
  <div class="ideaWrapper">
    <b-collapse :open="false" aria-id="contentIdForA11y1">
      <button
        class="button is-dark is-rounded is-large is-fullwidth is-focusable"
        slot="trigger"
        aria-controls="contentIdForA11y1"
      >{{ name }}</button>
      <div class="notification">
        <div class="content">
          <div class="starttime">
            <span>{{ start[0] }}</span> :
            <span>{{ start[1] }}</span>
          </div>
          <p>{{ description }}</p>
          <a class="button is-info" :href="location" target="_blank">location</a>
          <div class="endtime">
            <span>{{ end[0] }}</span> :
            <span>{{ end[1] }}</span>
          </div>
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
      type: [Number],
      required: false,
      default: '00',
    },
    end: {
      type: [Number],
      required: false,
      default: '00',
    },
    location: {
      type: String,
      required: false,
      default: '#',
    },
  },
};
</script>

<style>
.ideaWrapper {
  padding: 20px;
}

.starttime {
  margin: auto;
}

.endtime {
  margin-top: 10px;
}
</style>
