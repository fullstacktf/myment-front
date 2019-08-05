<template>
  <div class="ideaTableShort">
    <idea-item
      v-for="idea in ideaStructure"
      :name="idea.name"
      :description="idea.description"
      :start="idea.timeStart"
      :end="idea.timeEnd"
    ></idea-item>
  </div>
</template>

<script>
import IdeaItem from './IdeaItem';
export default {
  components: {
    'idea-item': IdeaItem,
  },
};
</script>

<style>
.ideaTableShort {
  display: flex;
  flex-wrap: wrap;
  flex-flow: column;
  max-height: 600px;
  overflow: hidden scroll;
}
</style>
