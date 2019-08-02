<template>
    <div>
        <html-clock theme="red"></html-clock>
        <Button></Button>
        <news-bar></news-bar>
        <logged-header></logged-header>
    </div>
</template>

<script>
import reloj from './components/HtmlClock'; //se le da un alias
import NewsBar from './components/NewsBar'; //se le da un alias
import LoggedHeader from './components/LoggedHeader'; //se le da un alias
import Button from './components/Button'; //se le da un alias


export default {
    components: {
        'html-clock': reloj,
        'news-bar': NewsBar,
        'logged-header': LoggedHeader,
        'Button': Button

         },
         
}
</script>

<style scoped>
/*el scope hace que el CSS sólo se aplique a este componente. NO SE RECOMIENDA usarlo en la App.vue, ya que es el componente global*/ 
</style>

