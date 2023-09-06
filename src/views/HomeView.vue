<script setup>
    import Sidebar from "../components/Sidebar.vue"
    import Header from "../components/Header.vue";
    import HomePage from "../components/HomePage.vue";
    import Transactions from "../components/Transactions.vue";
    import Transaction from "../components/Transaction.vue";
    import { ref , computed, watch } from "vue";
    document.title = "Wallet - Transactions"
    let display = ref(1)
    let transfer = {
        name: "Transfer",
        text: "Select Wallet Type to Transfer From",
        showAccountNumber: true,
        showAmount: true,
        showPin: true
    }

    let fundWallet = {
        name: "Fund Wallet",
        text: "Select Wallet Type",
        showAccountNumber: false,
        showAmount: true,
        showPin: false
    }

    let type = fundWallet
    let showTransaction = ref(false)

    const changePage = (option) => {
        display.value = option
    }

    const transaction = (option) => {
        if ( option == 'transfer' ) {
            type = transfer
        } else {
            type = fundWallet
        }
        showTransaction.value = true
        console.log('ok');
    }

    const closeTransaction = (option) => {
        if(option){
            showTransaction.value = false
        }
    }

</script>

<template>
    <section id="container">

        <div id="side-bar">
            <Sidebar  @clicked="changePage"/>
        </div>

        <div id="main-page">

            <Header />
            <HomePage v-if="display==1" @clickedButton="transaction"/>
            <Transactions v-if="display==2"/>
            <Transaction 
            :type="type"
            v-if="showTransaction"
            @close="closeTransaction"
            :show="showTransaction"
            />

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