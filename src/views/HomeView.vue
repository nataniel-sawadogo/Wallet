<script setup>
    import Sidebar from "../components/Sidebar.vue"
    import Header from "../components/Header.vue";
    import HomePage from "../components/HomePage.vue";
    import Transactions from "../components/Transactions.vue";
    document.title = "Wallet - Transactions"
    let display = 2
</script>

<template>
    <section id="container">

        <div id="side-bar">
            <Sidebar />
        </div>

        <div id="main-page">

            <Header />
            <HomePage v-if="display==1"/>
            <Transactions v-if="display==2"/>

        </div>

    </section>
</template>

<style script>
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