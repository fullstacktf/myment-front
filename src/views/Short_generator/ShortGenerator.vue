<template>
  <div class="generatorContainer">
    <div class="topZone">
      <site-input></site-input>
      <div class="options">
        <option-button name="free"></option-button>
        <option-button name="custom"></option-button>
        <option-button name="short"></option-button>
      </div>
    </div>
    <div class="itinerary">
      <idea-item></idea-item>
    </div>
    <time-line></time-line>
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
    'idea-item:': IdeaItem,
    'time-line': Timeline,
  },
};
</script>

<style scoped>
.generatorContainer {
  display: grid;
  width: 99vw;
  height: 100vh;
  justify-items: center;
  grid-template-rows: 20% 80% 10%;
}
.topZone {
  width: 100%;
  display: grid;
  grid-template-rows: 60% 40%;
  justify-items: center;
}
.options {
  width: 100%;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  justify-content: center;
  justify-items: center;
  z-index: 1;
}
.itinerary {
  width: 100%;
  padding: 50px;
  border: 1px solid grey;
  z-index: 3;
}
</style>
