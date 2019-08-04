<template>
  <div class="columns bigParent">
    <div class="column void1">
      <router-link to="/home">
        <span class="icon is-large">
          <i class="fas fa-home"></i>
        </span>
      </router-link>
    </div>
    <div class="column centerzone is-10">
      <b-field label="Enter your location in 2 tags ">
        <b-taginput v-model="tags" type="is-dark" placeholder="introduce the destination"></b-taginput>
      </b-field>
      <div class="tabWrapper">
        <b-tabs type="is-toggle is-danger " expanded>
          <b-tab-item label="free" class="is-danger">
            <div class="ideaTableFree">
              <h1>not available</h1>
            </div>
          </b-tab-item>
          <b-tab-item label="custom" icon="library-music">
            <div class="ideaTableCustom">
              <h1>not available</h1>
            </div>
          </b-tab-item>
          <b-tab-item label="short" icon="video">
            <div class="ideaTableShort">
              <idea-item
                v-for="idea in ideaStructure"
                :name="idea.name"
                :description="idea.description"
                :start="idea.timeStart"
                :end="idea.timeEnd"
              ></idea-item>
            </div>
          </b-tab-item>
        </b-tabs>
      </div>
    </div>
    <div class="column void2">
      <router-link to="/">
        <a class="delete is-medium"></a>
      </router-link>
    </div>
  </div>
</template>

<script>
import SiteInput from '../../components/SiteInput';
import Button from '../../components/Button';
import GenButton from '../../components/GenButton';
import IdeaItem from '../../components/IdeaItem';
import TagAdder from '../Tag_adder/TagAdder';

export default {
  name: 'Short',
  components: {
    'site-input': SiteInput,
    'option-button': Button,
    'generate-button': GenButton,
    'tag-adder': TagAdder,
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
.bigParent {
}

.void1 {
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.tabWrapper {
  border-radius: 5px;
  background-color: aliceblue;
}

.ideaTableCustom {
  display: flex;
  flex-wrap: wrap;

  font-size: 100px;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  max-height: 600px;
  overflow: hidden scroll;
  background-color: white;
}

.ideaTableFree {
  display: flex;
  font-size: 100px;
  flex-wrap: wrap;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  max-height: 600px;
  overflow: hidden scroll;
  background-color: white;
}

.ideaTableShort {
  display: flex;
  flex-wrap: wrap;
  flex-flow: column;
  max-height: 600px;
  overflow: hidden scroll;
}

.timeLine {
  max-height: 20%;
  overflow: hidden;
}
</style>
