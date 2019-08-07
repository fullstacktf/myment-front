<template>
  <div class="headerNav">
    <img src="../../public/assets/M.png" alt="our coolest logo" />
    <newsBar class="news" :newNews="newsLetter"></newsBar>
  </div>
</template>

<script>
import newsBar from './NewsBar';
export default {
  components: {
    newsBar: newsBar,
  },
  data() {
    return {
      newsLetter: '',
    };
  },
};
</script>

<style>
body {
  text-align: center;
}
.news {
  height: 100%;
}
.headerNav {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 4% 96%;
}
.headerNav img {
  width: 80px;
  height: 50px;
}
</style>
