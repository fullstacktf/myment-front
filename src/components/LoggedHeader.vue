<template>
    <div class="headerNav">
        <img src="../../public/assets/M.png" alt="our coolest logo"/>
        <newsBar class = "news"></newsBar> 
    </div>
</template>

<script>
import newsBar from './NewsBar';
export default {
    components:{
        'newsBar': newsBar
    }

}
</script>

<style>
body{
    text-align: center}
.news{
    height: 100%;
}
.headerNav{
    width: 100%;
    height: 100%;
    display:grid;
    grid-template-columns: 10% 90%;
}
.headerNav img {
    width: 100%;
    height: 100%;
}

</style>
