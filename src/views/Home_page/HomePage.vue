<template>
  <div class="globalContainer">
    <logged-header></logged-header>
    <div class="container">
          <div class="ghostRanking">FakeRanking</div>
          <customized-map></customized-map>
          <div class="sidemenu">side menu</div>
    </div>
  </div>
</template>

<script>
import map from '../../components/Map'
import LoggedHeader from '../../components/LoggedHeader'
import newsBar from '../../components/NewsBar';
import Footer from '../../components/Footer';
export default {
  name: 'Home',
  components: {
  'customized-map': map,
  'logged-header': LoggedHeader,
  'news-bar': newsBar,
  'custom-footer': Footer
  }
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
  grid-template-rows: 9% 91%;
  width: 100vw;
  height: 100vh;
  background-color: #79f0a5;


}
.sidemenu{background: red;}
.container{
  display: grid;
  grid-template-columns: 20% 65% 15%;
  background: grey;
  }

</style>
