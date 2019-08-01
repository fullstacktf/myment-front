<template> <!-- Just a cool way to show our news -->
    <div class="containerBar marquee" >
        <div >{{newNews}}</div>
    </div>
</template>

<script>
export default {
    props: {
        newNews: {
            type: String,
            required: true,
            default: "if you are watching it, some error may has happened or its just a random text for test it. Use the 'newNews' prop for change me. We will show in this bar some useful stuff"
        }

    }

}
</script>

<style>

.marquee {
    display:flex;
    align-items: center;
    font-size: 25px;
    width: 100%;
    height: 50px;
	background-color: rgb(0, 0, 0);
	color: white;
    white-space: nowrap;
    overflow: hidden;
    box-sizing: border-box;
    box-shadow: inset 3px 3px 4px white, inset -3px -3px 4px white;
}
.marquee div {
    display: inline-block;
    padding-left: 100%;
    animation: marquee 15s linear infinite;
}
@keyframes marquee {
    0%   { transform: translate(0, 0); }
    100% { transform: translate(-100%, 0); }
}

</style>
