<template>
  <div class="ideaWrapper">
    <b-collapse :open="false" aria-id="contentIdForA11y1">
      <button
        class="button is-dark is-rounded is-large is-fullwidth is-focusable"
        slot="trigger"
        aria-controls="contentIdForA11y1"
      >{{ category }} idea: {{ name }}</button>
      <div class="notification">
        <div class="content">
          <div class="starttime">
            <span>{{ start.hour }}</span> :
            <span>{{ start.minutes }}</span>
          </div>
          <p>{{ description }}</p>
          <a class="button is-info" :href="location" target="_blank">location</a>
          <div class="endtime">
            <span>{{ end.hour }}</span> :
            <span>{{ end.minutes }}</span>
          </div>
        </div>
      </div>
    </b-collapse>
  </div>
</template>

<script>
import { Stream } from 'stream';
export default {
  name: 'IdeaItem',

  props: {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
      default: 'no description added',
    },
    start: {
      type: Object,
      required: false,
      default: '00',
    },
    end: {
      type: Object,
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
