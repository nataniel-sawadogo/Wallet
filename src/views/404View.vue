<script setup>
    document.title = "Page not Found"
</script>

<template>
    <div>
        <h1>
            404, Page not Found
        </h1>
        <img src="../assets/images/magnifier.svg" alt="Not found">
    </div>
</template>

<style scoped>
    div{
        height: 100vh;
        width: 100%;
        display: flex;
        /* align-items: center; */
        justify-content: center;
        background: rgb(244, 247, 252);
        position: relative;
    }

    h1{
        font-size: 3rem;
        color: rgb(36, 36, 36);
        padding: 1em;
        background: white;
        border: gray solid 1px;
        height: 25vh;
        position: absolute;
        top: 5vh;
        border-radius: 0.2em;
    }
    img{
        height: 18em;
        width: 18em;
        position: absolute;
        top: 40vh;
    }
</style>