<template>
    <div class="headerNav">
        <img src="../assets/M.png" alt="our coolest logo">
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
    height: 60px;
}
.headerNav{
    display:flex;
    border: 1px solid black;
}
.headerNav img {
    border: 1px solid black;
    width: 60px;
    height: 60px;
}

</style>
