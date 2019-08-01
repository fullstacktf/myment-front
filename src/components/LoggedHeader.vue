<template>
    <div class="headerNav">
        <img src="../assets/M.png" alt="our coolest logo"/>
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
.news{
    height: 100%;
}
.headerNav{
    width: 100%;
    height: 100%;
    display:grid;
    grid-template-columns: 12% 88%;
}
.headerNav img {
    width: 100%;
    height: 100%;
}

</style>
