<template>
    <div class="footerContainer"> {{copyright}} {{author}}  {{year}}</div>
</template>

<script>
export default {
  data(){
      return {
      copyright: "derechos de copyright todos tochos ",
      author: "los seres todopoderosos a los que vosotros, simples usuarios, debéis reverencia",
      year: 2019
      }
  }
}
</script>

<style scoped>
.footerContainer{
    background: black;
    color: white;
    width: 100%;
    height: 100%;
    font-size: 12px;
    text-align: center;
    }

</style>
