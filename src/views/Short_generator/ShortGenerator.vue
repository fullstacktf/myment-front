<template>
  <div class="columns bigParent">
    <div class="column void1"></div>
    <div class="column centerzone is-half"></div>
    <div class="column void2"></div>
  </div>
</template>

<script>
import SiteInput from '../../components/SiteInput';
import Button from '../../components/Button';
import GenButton from '../../components/GenButton';
import IdeaItem from '../../components/IdeaItem';
import Timeline from '../../components/TimeLine';
import TagAdder from '../Tag_adder/TagAdder';

export default {
  name: 'Short',
  components: {
    'site-input': SiteInput,
    'option-button': Button,
    'generate-button': GenButton,
    'tag-adder': TagAdder,
    'idea-item': IdeaItem,
    'time-line': Timeline,
  },
  data() {
    return {
      ideaStructure: [
        {
          name: 'first',
          description: 'lorem ipsum ...',
          time: 198273213,
        },
        {
          name: 'second',
          description: 'lorem ipsum ...',
          time: 1298379123,
        },
        {
          name: 'third',
          description: 'lorem ipsum ...',
          time: 1298379123,
        },
        {
          name: 'fourth',
          description: 'lorem ipsum ...',
          time: 1298379123,
        },
        {
          name: 'fifth',
          description: 'lorem ipsum ...',
          time: 1298379123,
        },
        {
          name: '...',
          description: 'lorem ipsum ...',
          time: 1298379123,
        },
      ],
    };
  },
};
</script>

<style scoped>
.bigParent {
  height: 100%;
}
.centerzone {
  margin: 0 auto;
  background-color: #a297c4;
}
</style>
