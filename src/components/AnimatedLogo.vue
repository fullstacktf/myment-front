<template>
<div class="logoWrapper">
<img class="hero-logo-circle" src="../src/assets/myment-logo_circle_Mesa de trabajo 1.svg" alt="">
</div>
</template>

<script>
export default {
  name: 'AnimatedLogo',
};
</script>

<style>
.hero-logo-circle:nth-child(10) {
    animation-duration: 120s;
}
.hero-logo-circle {
    position: absolute;
    left: 0;
    top: 0;
    animation: hero-logo-circle 1s linear infinite;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-fill-mode: none;
    animation-play-state: running;
    animation-name: hero-logo-circle;
    will-change: transform;
}

* {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

</style>
