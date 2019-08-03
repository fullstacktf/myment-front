<template>
  <div class="globalContainer">
    <logged-header></logged-header>
    <div class="homeContainer">
      <div class="sidemenu">
        <div class="customSM"></div>
      </div>
      <div class="midZoneHome">
        <div>
          <div class="mapZone">
            <customized-map></customized-map>
          </div>
          <div class="buttonBar">
            <custom-button customWidth="120px" name="Generate"></custom-button>
            <custom-button name="Add"></custom-button>
            <custom-button customWidth="120px" name="Explore"></custom-button>
          </div>
        </div>
      </div>

      <div class="ghostRanking">
        <leader-board></leader-board>
      </div>
    </div>
  </div>
</template>

<script>
import map from '../../components/Map';
import LoggedHeader from '../../components/LoggedHeader';
import newsBar from '../../components/NewsBar';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import FakeLeaderboard from '../../components/FakeLeaderboard';
export default {
  name: 'Home',
  components: {
    'customized-map': map,
    'logged-header': LoggedHeader,
    'news-bar': newsBar,
    'custom-footer': Footer,
    'custom-button': Button,
    'leader-board': FakeLeaderboard,
  },
};
</script>

<style scoped>
/*.globalContainer .container{
  margin-left: auto;
  margin-right: auto;
}*/

.globalContainer {
  background-color: #255060;
  margin: auto;
  margin-top: 0;
  display: grid;
  grid-template-rows: 5% 95%;
  width: 100vw;
  height: 100vh;
  background-color: #79f0a5;
}

.mapZone {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: black;
}

.homeContainer {
  display: grid;
  min-height: 10px;
  grid-template-columns: 20% 60% 20%;
  background: #66838c;
}
.sidemenu {
  display: flex;
  align-items: center;
}
.customSM {
  width: 300px;
  height: 600px;
  background: #255060;
}
.midZoneHome {
  display: grid;
  grid-template-rows: 70% 30%;
  background: white;
  height: 85% !important;
  margin-top: 45px;
  margin-right: 45px;
  margin-left: 45px;
  box-shadow: 8px 8px 13px #255060, -8px -8px 13px #255060;
  border-radius: 35px;
  overflow: hidden;
}

.buttonBar {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.buttonBar:hover {
  background: #12345d;
}
</style>
