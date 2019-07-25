<template>
  <div>
  <main-page></main-page>
  <LoggedHeader></LoggedHeader>
  </div>

</template>
    
<script>
import Main from "./components/Main";
import  News from "./components/NewsBar";


import LoggedHeader from "./components/LoggedHeader";

export default {
  name: "App",
  components: {
    "main-page": Main,
    "LoggedHeader": LoggedHeader,
    "News": News
  }
};
</script>
