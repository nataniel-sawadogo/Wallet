<script setup>
    import data from "../data/data.json"
    import { defineEmits } from "vue";
    const emit = defineEmits(['clickedButton'])
    let f = 5
    let nairaBalance = data.balances.naira.toFixed(2)
    let dollarBalance = data.balances.dollar.toFixed(2)

    const emitClickedButton = (option) => {
        emit('clickedButton', option)
        console.log('click');
    }

    if (nairaBalance < 10) {
        nairaBalance = `0${nairaBalance}`
    }
    if (dollarBalance < 10) {
        dollarBalance = `0${dollarBalance}`
    }
</script>

<template>
    <div id="container">

        <div class="head">

            <h1>Hello Kingsley 👋🏾</h1>
            <button class="white-button" @click="emitClickedButton('transfer')">Transfer Funds</button>
            <button @click="emitClickedButton('fundWallet')">+ Fund Wallet</button>
        </div>

        <div id="balance-container">

            <div class="balance">
                <div class="number">
                    <h1>₦</h1>
                    <h1> {{ nairaBalance }} </h1>
                </div>
                <p>Naira Balance</p>
            </div>

            <div class="balance">
                <div class="number">
                    <h1>$</h1>
                    <h1> {{ dollarBalance }} </h1>
                </div>
                <p>Dollar Balance</p>
            </div>

        </div>

        <div id="recent">
            <h2>Recent Transactions</h2>
            <div id="transaction-header">
                <p>Transaction Type</p>
                <p>Date</p>
                <p>Status</p>
                <p>Amount</p>
            </div>
            <div class="transaction" v-for="i in f" :key="i">
                <p>Wallet {{ data.transactions[i].type }}</p>
                <p>{{ data.transactions[i].date }} | <span class="time">{{ data.transactions[i].time }}</span></p>
                <p class="before-last"><span :class="data.transactions[i].status">• {{ data.transactions[i].status }}</span></p>
                <p class="last">{{ data.transactions[i].currency }} {{ data.transactions[i].amount }}</p>
            </div>
        </div>

    </div>
</template>

<style scoped>

    #container{
        display: flex;
        flex-direction: column;
        gap: 4%;
        height: 100%;
    }
    .white-button{
        background: white !important;
        color: blue !important;
        border: blue 1px solid !important;
    }

    .white-button:hover{
        color: black !important;
        border: 1px solid black !important;
        font-weight: bold;
    }

    .head{
        display: flex;
        gap: 2em;
        padding: 0 2vw;
        width: 100%;
        height: 10%;
        align-items: center;
        /* border: red 1px solid; */
    }

    .head h1{
        width: 70%;
        color: rgb(1, 1, 61);
        font-weight: bold;
    }

    button{
        height: 75%;
        width: 13%;
    }

    #balance-container{
        height: 15%;
        width: 100%;
        display: flex;
        justify-content: space-around;
        padding: 0 2vw;
        /* border: red 1px solid; */
    }

    .balance{
        width: 47%;
        border: rgba(0, 0, 0, 0.338) 1px solid;
        border-radius: 0.4em;
        display: flex;
        flex-direction: column;
        padding-left: 2vw;
        justify-content: center;
    }

    .number{
        display: flex;
        color: rgb(1, 1, 61);
    }

    .number h1{
        font-weight: bold;
    }

    #recent{
        height: 58%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        /* border: red 1px solid; */
    }
    
    #recent h2{
        text-align: left;
        width: 100%;
        padding-left: 2.5%;
        padding-bottom: 2vh;
        font-weight: bold;
    }

    #transaction-header{
        display: flex;
        justify-content: space-between;
        width: 95%;
        padding: 0 2vw;
        background: rgba(110, 108, 133, 0.197);
        border-radius: 0.3em;
        height: 15%;
        align-items: center;
    }

    #transaction-header p{
        text-align: left;
        width: 18%;
        color: rgb(1, 1, 61);
    }

    .transaction{
        display: flex;
        justify-content: space-between;
        width: 95%;
        border-bottom: 1px solid rgba(0, 0, 0, 0.216);
        height: 15%;
        padding: 0 2vw;
        align-items: center;
    }

    .transaction p{
        text-align: left;
        width: 18%;
        color: rgb(1, 1, 61);
        transition: color 0.5s;
    }

    .time{
        opacity: 0.5;
    }

    .before-last{
        display: flex;
        align-items: center;
    }

    .Failed{
        color: rgb(181, 0, 0) !important;
        background: rgba(255, 80, 80, 0.193);
        padding: 0.2em 0.5em;
        border-radius: 0.3em;
        border: rgb(181, 0, 0) solid 1px;
    }

    .Successful{
        color: rgb(33, 128, 6) !important;
        background: rgba(65, 247, 14, 0.201);
        padding: 0.2em 0.5em;
        border-radius: 0.3em;
        border: rgb(33, 128, 6) solid 1px;
    }

    .transaction:hover p{
        color: black;
        font-weight: bold;
    }
</style>