<template>
  <div class="formWrapper">
    <b-field horizontal label="Enter some tags">
      <b-taginput v-model="tags" :data="filteredTags"></b-taginput>
    </b-field>

    <b-field horizontal label="Idea Name" message="Here goes the name of your idea">
      <b-input name="subject" expanded></b-input>
    </b-field>

    <b-field horizontal label="Description">
      <b-input type="textarea"></b-input>
    </b-field>
    <div class="columns">
      <div class="column is-2"></div>
      <div class="column is-4">
        <b-field horizontal label="Start Time">
          <b-clockpicker v-model="minTime" :hour-format="format"></b-clockpicker>
        </b-field>
      </div>
      <div class="column is-4">
        <b-field horizontal label="End Time">
          <b-clockpicker v-model="maxTime" :hour-format="format"></b-clockpicker>
        </b-field>
      </div>
    </div>

    <b-field horizontal label="url" message="Maybe your idea is linked to a website?">
      <b-input name="subject" expanded></b-input>
    </b-field>

    <b-field horizontal class="is-fullwidth" label="Idea type">
      <b-select placeholder="Select between the types">
        <option value="1">Leisure</option>
        <option value="2">Food</option>
        <option value="3">Lodging</option>
      </b-select>
    </b-field>

    <b-field horizontal>
      <!-- Label left empty for spacing -->
      <p class="control">
        <button class="button is-primary is-fullwidth">share your idea</button>
      </p>
    </b-field>
  </div>
</template>

<script>
export default {
  name: 'IdeaForm',
  data() {
    return {
      isSelectOnly: false,
      tags: ['city', 'zone', 'street', 'number'],
      allowNew: true,
      zoom: 7,
    };
  },
  mounted() {},
};
</script>

<style>
.formWrapper {
  padding: 90px;
  padding-left: 30px;
  background-color: #a5bec4;
  min-height: 30%;
  align-self: center;
  justify-self: center;
  border-radius: 10px;
}
</style>
