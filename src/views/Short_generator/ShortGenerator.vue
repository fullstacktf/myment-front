<template>
  <div class="columns bigParent">
    <div class="column void1">
      <router-link to="/home">
        <span class="icon is-large">home</span>
      </router-link>
    </div>
    <div class="column centerzone is-10">
      <b-field class="topField">
        <b-taginput v-model="tags" type="is-dark" placeholder="Enter the location in 2 tags "></b-taginput>
        <b-radio-button>search location</b-radio-button>
      </b-field>
      <div class="tabWrapper">
        <b-tabs type="is-toggle is-danger " expanded>
          <b-tab-item label="short" class="is-danger">
            <div class="masterContent">
              <!-- this is the component of the itinerary -->
              <div class="ideaTableShort" v-if="tagsAdded">
                <idea-item
                  v-for="idea in ideaStructure"
                  :key="idea.id"
                  :name="idea.name"
                  :description="idea.description"
                  :start="idea.timeStart"
                  :end="idea.timeEnd"
                  :location="idea.location"
                ></idea-item>
                <!-- this is the component of the tag adder -->
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
            <div class="itineraryComponent" v-if="tagsAdded">
              <div class="ideaTableFree">
                <h1>free itinerary not available</h1>
              </div>
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
          description:
            'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?',
          timeStart: 0,
          timeEnd: 0,

          location: 'https://www.emezeta.com/aulavirtual/',
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
      tagsAdded: true,
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
