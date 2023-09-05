<script setup>
    import Sidebar from "../components/Sidebar.vue"
    import Header from "../components/Header.vue";
    import HomePage from "../components/HomePage.vue";
    import Transactions from "../components/Transactions.vue";
    import { ref , computed, watch } from "vue";
    document.title = "Wallet - Transactions"
    let display = ref(1)

    const changePage = (option) => {
        display.value = option
    }

</script>

<template>
    <section id="container">

        <div id="side-bar">
            <Sidebar  @clicked="changePage"/>
        </div>

        <div id="main-page">

            <Header />
            <HomePage v-if="display==1"/>
            <Transactions v-if="display==2"/>

        </div>

    </section>
</template>

<style>
    #container{
        height: 100vh;
        width: 100%;
        display: flex;
    }

    #side-bar{
        height: 100%;
        width: 17%;
    }

    #main-page{
        width: 83%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        /* border: red 1px solid; */
    }
</style>