<template>
  <div class="generatorContainer">
    <div class="topZone">
      <div class="innerHeader">
        <site-input></site-input>
        <div class="iconWrapper">
          <router-link to="/">
            <div class="exitIcon"></div>
          </router-link>
        </div>
      </div>
      <div class="options">
        <option-button name="free"></option-button>
        <option-button name="custom"></option-button>
        <option-button name="short"></option-button>
      </div>
    </div>
    <div class="itinerary">
      <!-- <idea-item v-for="idea in ideaStructure" :name="idea.name"></idea-item> -->
      <idea-item v-for="idea in ideaStructure" :name="idea.name"></idea-item>
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
.exitIcon {
  position: relative;
  width: 45px;
  height: 45px;
  background-image: url('../../../public/assets/close_icon.png');
  background-size: cover;
  background-repeat: no-repeat;
}
.iconWrapper {
  width: 50px;
  height: 50px;
}
.generatorContainer {
  display: grid;
  width: 97vw;
  height: 90vh;
  justify-content: center;
  grid-template-rows: 20% 80% 10%;
}
.topZone {
  width: 100%;
  margin: auto;
  display: grid;
  grid-template-rows: 60% 40%;
  justify-items: center;
}
.innerHeader {
  width: 100%;
  display: grid;
  justify-items: center;
  grid-template-columns: 95% 5%;
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 85%;
  padding: 50px;
  border: 1px solid grey;
  z-index: 3;
  overflow: hidden scroll;
}
</style>
