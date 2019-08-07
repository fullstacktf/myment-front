<template>
  <div class="wrapper">
    <idea-item
      v-for="idea in ideaStructure"
      :name="idea.name"
      :description="idea.description"
      :start="idea.timeStart"
      :end="idea.timeEnd"
    ></idea-item>
  </div>
</template>

<script >
import IdeaItem from '../../components/IdeaItem';
export default {
  components: {
    'idea-item': IdeaItem,
  },
  data() {
    return {
      ideaStructure: [
        {
          name: 'hotel',
          description: 'lorem ipsum ...',
          timeStart: 0,
          timeEnd: 0,
        },
        {
          name: 'hotel',
          description: 'lorem ipsum ...',
          timeStart: 0,
          timeEnd: 0,
        },
        {
          name: 'hotel',
          description: 'lorem ipsum ...',
          timeStart: 0,
          timeEnd: 0,
        },
        {
          name: 'hotel',
          description: 'lorem ipsum ...',
          timeStart: 0,
          timeEnd: 0,
        },
        {
          name: 'hotel',
          description: 'lorem ipsum ...',
          timeStart: 0,
          timeEnd: 0,
        },
        {
          name: 'hotel',
          description: 'lorem ipsum ...',
          timeStart: 0,
          timeEnd: 0,
        },
        {
          name: 'hotel',
          description: 'lorem ipsum ...',
          timeStart: 0,
          timeEnd: 0,
        },
        {
          name: 'hotel',
          description: 'lorem ipsum ...',
          timeStart: 0,
          timeEnd: 0,
        },
        {
          name: 'hotel',
          description: 'lorem ipsum ...',
          timeStart: 0,
          timeEnd: 0,
        },
      ],
    };
  },
};
</script>

<style scoped>
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
