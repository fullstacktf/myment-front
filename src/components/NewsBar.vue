<template>
  <!-- Just a cool way to show our news -->
  <div>
    <div class="marquee">
      <div>{{newNews}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    newNews: {
      type: String,
      required: true,
      default:
        "if you are watching this, some error may has happened or its just a random text for test it. Use the 'newNews' prop for change me. We will show in this bar some useful stuff",
    },
  },
};
</script>

<style>
.columns {
  width: 100%;
}

.marquee {
  display: flex;

  align-items: center;
  font-size: 17px;
  height: 50px;
  background-color: #451a4f;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  box-sizing: border-box;
}
.marquee div {
  display: flex;
  padding: 15px;
  padding-left: 100%;
  animation: marquee 15s linear infinite;
  vertical-align: center;
}
@keyframes marquee {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
}
</style>
