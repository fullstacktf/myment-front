<template>
  <div class="columns bigParent">
    <div class="column void1">
      <router-link to="/home">
        <img src="../../../public/assets/myment-logo.png" alt="MYMENT" />
      </router-link>
    </div>
    <div class="column centerzone is-10">
      <b-field class="topField">
        <b-taginput v-model="tags" type="is-dark" placeholder="Enter the location in 2 tags "></b-taginput>
        <b-radio-button>search location</b-radio-button>
      </b-field>
      <div class="tabWrapper">
        <b-tabs type="is-toggle is-danger " expanded>
          <b-tab-item label="short" icon="video">
            <div class="masterContent">
              <!-- this is the component of the itinerary -->
              <div class="itineraryComponent" v-if="tagsAdded">
                <div class="ideaTableShort">
                  <idea-item
                    v-for="idea in ideaStructure"
                    :name="idea.name"
                    :key="idea.id"
                    :description="idea.description"
                    :start="idea.timeStart"
                    :end="idea.timeEnd"
                  ></idea-item>
                </div>
              </div>
              <div class="columns" v-else>
                <div class="column is-3"></div>
                <div class="column is-6">
                  <button
                    v-if="!tagsAdded"
                    class="button is-primary is-large is-warning is-fullwidth"
                    @click="isComponentModalActive = true"
                  >Generate Itinerary !</button>

                  <b-modal :active.sync="isComponentModalActive" has-modal-card>
                    <tag-adder></tag-adder>
                  </b-modal>
                </div>
                <div class="column is-3"></div>
              </div>
            </div>
          </b-tab-item>
          <b-tab-item label="custom" icon="library-music">
            <div class="ideaTableCustom">
              <h1>custom itinerary not available</h1>
            </div>
          </b-tab-item>
          <b-tab-item label="free" icon="video">
            <div class="ideaTableFree">
              <h1>free itinerary not available</h1>
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
import Button from '../../components/Button';
import IdeaItem from '../../components/IdeaItem';
import TagAdder from '../Tag_adder/TagAdder';

export default {
  name: 'Short',
  components: {
    'option-button': Button,
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
      tagsAdded: false,
      isComponentModalActive: false,
    };
  },
};
</script>

<style scoped>
.bigParent {
}

.topField {
  margin-top: 20px;
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
.tagComponent {
  align-self: center;
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
