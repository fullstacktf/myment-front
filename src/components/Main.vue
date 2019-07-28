<template>

    <div class="container">
        <header> <Logged-Header></Logged-Header></header>  
        <div class="midZone">
            <div class="ranking"></div>
            <div class="interact">
                <custom-image source = "../assets/map.jpg"> </custom-image>
                <div class="buttonsGrid">
                    <chachi-button name = "Generate"></chachi-button>
                    <chachi-button name = "Add"></chachi-button>
                    <chachi-button name = "Explore"></chachi-button>
                </div>
            </div>
        </div>
       <footer><custom-footer></custom-footer></footer>
    </div>
</template>


<script>
import chachiHeader from './LoggedHeader';
import  Button from "./Button";
import  Single from "./SingleMenuLink";
import Image from './Image'
import Footer from './Footer'



export default {
  name: "Main",
    components: {
    "Logged-Header": chachiHeader,
    "chachi-button": Button,
    "single-element": Single,
    "custom-image": Image,
    "custom-footer": Footer


  }
};
</script>

<style>

body {
  margin: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #255060;
}

.container {
  width: 80vw;
  height: 100vh;
  background-color: #79f0a5;
  margin: 0;}
    header{
        height: 10%;
    }
    .midZone{
        height: 85%;
        display: grid;
        grid-template-columns: 30% 70%;
    }
        .ranking{
            background: blue;
            
        }

        .interact {
            display: grid;
            grid-template-rows: 80% 20%;

        }
            .buttonsGrid{
                display: flex;
                align-items: center;
                justify-content: space-around;
            }

    footer{height: 5%;}


</style>
