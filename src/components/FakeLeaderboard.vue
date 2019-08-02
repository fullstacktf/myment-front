<template>
    <div class="containerRanking">
        <div class="titleWrapper"><h3>RANKING</h3></div>
        <div class="containerLeader">
            <div class="section">Pos 1: </div>
            <div class="section">user 2</div>
            <div class="section">user 3</div>
            <div class="section">user 4</div>
            <div class="section">user 5</div>
            <div class="section">user 6</div>
            <div class="section">user 7</div>
            <div class="section">user 8</div>
            <div class="section">user 9</div>
            <div class="section">user 10</div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Merriweather+Sans&display=swap');

.containerRanking{
    height: 90%;
    
}
.containerLeader{
    display: grid;
    grid-template-rows: repeat(10, 10%);
    overflow: hidden;
    margin-top: 15px;
    width: 90%;
    height: 90%;
    padding: 10px;
}
.section{
    display: grid;
    align-items: center;
    justify-content: center;
    margin: 4px;
    background: white;
    border-radius: 20px;
    opacity: 0.5;
    box-shadow: 3px 3px 10px black;

}
h3{
    text-align: center;
    font-family: 'Merriweather Sans', sans-serif;
;
}
.titleWrapper{
    width: 90%;
}
/*
@keyframes marquee {
    0%   { transform: translate(0, 0); }
    100% { transform: translate(0, -620%); }
}
*/
</style>
