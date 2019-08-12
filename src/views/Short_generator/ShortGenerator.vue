<template>
  <div class="columns bigParent">
    <div class="column void1">
      <router-link to="/">
        <img class="is-128x128" src="../../../public/assets/myment-logo.png" alt="MYMENT" />
      </router-link>
    </div>
    <div class="column centerzone is-10">
      <b-field class="topField is-grouped-centered">
        <div class="columns">
          <div class="column is-6 is-gapless">
            <place-selector></place-selector>
          </div>
          <div class="column is-2 is-gapless">
            <button
              class="button is-black is-large"
              v-if="!location"
              @click="addLocationState"
            >search location</button>
            <button
              class="button is-black is-large"
              v-else
              @click="removeLocationState"
            >remove location</button>
          </div>
        </div>
      </b-field>
      <div class="tabWrapper">
        <b-tabs type="is-toggle is-danger " expanded>
          <b-tab-item label="short" icon="video">
            <div class="masterContent">
              <!-- this is the component of the itinerary -->
              <div class="itineraryComponent" v-if="tags">
                <div class="ideaTableShort">
                  <idea-item
                    v-for="idea in ideasReceived"
                    :name="idea.name"
                    :key="idea.id"
                    :description="idea.description"
                    :start="idea.timeStart"
                    :end="idea.timeEnd"
                    :location="idea.location"
                  ></idea-item>
                </div>
              </div>
              <div class="columns" v-else>
                <div class="column is-3"></div>
                <div class="column is-6">
                  <button
                    v-if="!tags"
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
              <h3>custom itinerary not available</h3>
            </div>
          </b-tab-item>
          <b-tab-item label="free" icon="video">
            <div class="ideaTableFree">
              <h3>free itinerary not available</h3>
            </div>
          </b-tab-item>
        </b-tabs>
      </div>
    </div>
    <div class="column void2">
      <router-link to="/home" v-if="true">
        <a class="delete is-medium is-hoverable is-offset-one-third" v-if="userLogged"></a>
      </router-link>
    </div>
  </div>
</template>

<script>
import Button from '../../components/Button';
import IdeaItem from '../../components/IdeaItem';
import TagAdder from '../Tag_adder/TagAdder';
import PlaceSelector from '../../components/PlaceSelector';

export default {
  name: 'Short',
  components: {
    'option-button': Button,
    'tag-adder': TagAdder,
    'idea-item': IdeaItem,
    'place-selector': PlaceSelector,
  },
  data() {
    return {
      isComponentModalActive: false,
    };
  },
  computed: {
    tags() {
      return this.$myStore.state.tagsAdded;
    },
    location() {
      return this.$myStore.state.locationAdded;
    },
    userLogged() {
      return this.$myStore.state.userLogged;
    },
    ideasReceived() {
      return this.$myStore.state.ideas;
    },
  },

  methods: {
    toast() {},
    addLocationState() {
      this.$buefy.toast.open({
        message: 'Location added successfully',
        type: 'is-success',
      });
      this.$myStore.commit('change');
    },
    removeLocationState() {
      this.$buefy.toast.open({
        message: 'Location removed',
        type: 'is-danger',
      });
      this.$myStore.commit('falsed');
      this.$myStore.commit('change');
      this.value = '';
    },
  },
};
</script>

<style scoped>
.topField {
  margin-top: 20px;
}
.void2 {
  padding-top: 1%;
  display: flex;
  justify-content: right;
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



