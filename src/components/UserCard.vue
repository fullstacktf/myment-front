<template>
  <div class="userWrapper modal-card">
    <div class="modal-card wrapperModal">
      <div class="columns is-gapless userCardWrapper">
        <div class="column is-6 col1">
          <div class="userInfo">
            <div class="columns">
              <div class="column is-3 is-gapless">
                <div class="personalInfo">
                  <figure class="image is-128x128 imageType is-wrapped">
                    <img src="https://bulma.io/images/placeholders/128x128.png" />
                  </figure>
                  <h1 class="title is-5 is-centered usernameType">USERNAME</h1>
                  <div class="subtitleWrapper">
                    <h2 class="subtitle mine">ranking</h2>
                  </div>
                </div>
              </div>
              <div class="column is-gapless">
                <div class="bioWrapper">
                  <b-field>
                    <b-input
                      type="textarea"
                      minlength="10"
                      maxlength="300"
                      placeholder="Write Your bio"
                    ></b-input>
                  </b-field>
                </div>
              </div>
            </div>
          </div>
          <div class="filling"></div>
          <div class="personaltagsWrapper">
            <h1 class="title is-7 is-centered">Enter your lodging preferences</h1>
            <b-field class="medium">
              <b-taginput label="Enter your lodging preferences" maxlength="10" maxtags="10"></b-taginput>
            </b-field>
            <h1 class="title is-7 is-centered">Enter your food preferences</h1>
            <b-field>
              <b-taginput label="Enter your lodging preferences" maxlength="10" maxtags="10"></b-taginput>
            </b-field>
            <h1 class="title is-7 is-centered">Enter your leisure preferences</h1>
            <b-field>
              <b-taginput label="Enter your lodging preferences" maxlength="10" maxtags="10"></b-taginput>
            </b-field>
          </div>
        </div>
        <div class="column is-6 is-fullheight col2">
          <div class="placeWrapper">
            <place-selector></place-selector>
          </div>
          <div class="recentIdeas">
            <div class="recentTitle">
              <h1 class="title is-3">RECENT IDEAS</h1>
            </div>
            <idea-item
              v-for="idea in ideas"
              :name="idea.name"
              :key="idea.id"
              :description="idea.description"
              :start="idea.timeStart"
              :end="idea.timeEnd"
              :location="idea.location"
            ></idea-item>
          </div>
        </div>
      </div>
    </div>

    <div class="buttonWrapper">
      <button class="button is-primary is-large is-fullwidth">update</button>
    </div>
  </div>
</template>

<script>
import PlaceSelector from './PlaceSelector';
import IdeaItem from './IdeaItem';

export default {
  name: 'UserCard',
  components: {
    'place-selector': PlaceSelector,
    'idea-item': IdeaItem,
  },
  data() {
    return {
      ideas: [
        {
          name: 'hotel',
          description: 'lorem ipsum ...',
          timeStart: 0,
          timeEnd: 0,
          location: 'https://www.google.es',
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


<style>
.subtitleWrapper {
  color: white;
}

.subtitle.mine {
  color: white;
}
.bioWrapper {
  margin-top: 20px;
}
.personalInfo {
  margin-top: 20px;
  margin-left: 10px;
}

.placeWrapper {
  padding: 10px;
}

.recentTitle {
  margin-top: 40px;
  display: flex;
  width: 100%;
  justify-content: center;
}

.recentIdeas {
  margin: 10px;
  background-color: rgb(123, 189, 167);
  border-radius: 10px;
}

.personaltagsWrapper {
  margin-left: 10px;

  margin-right: 10px;
}
.userWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(153, 144, 144) !important;
}
.col1 {
  padding: 0px;
}

.meduim {
  padding: 10px;
}

.col2 {
  padding: 10px;
}
.filling {
  height: 30px;
}
.userCardWrapper {
  height: 70%;
}
.wrapperModal {
  display: grid;
  width: 80% !important;
  height: 75%;
  margin-top: 1% !important;
  border-radius: 10px;
  background-color: rgb(73, 80, 116);
  padding: 10px;
}

.buttonWrapper {
  margin-top: 20px;
  width: 80%;
}
</style>
