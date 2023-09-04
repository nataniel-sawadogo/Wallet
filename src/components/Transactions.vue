<script setup>
    import data from "../data/data.json"
    import { computed , ref , watch } from "vue";
    let f = data.transactions.length
    let pages = f + 1
    let pageNumber = ref()
    let currentPage = ref(1)
    let showPrevious = false
    let showNext = true
    console.log(f);
    
    if (pages > 8){
        pageNumber = Math.ceil(pages / 8)
    }else{
        pageNumber = 1
    }

    const pagination = (number) => {
        if(number < pageNumber){
            return data.transactions.slice(((number - 1) * 8), (number * 8))
        }else{
            return data.transactions.slice(((number.value - 1) * 8), f) 
        }
    }

    let display = pagination(1)
    watch(currentPage, () => {
        if(currentPage.value <= 1){
            showPrevious = false
            console.log(1);
        }else{
            showPrevious = true
            console.log(2);
        }
        if(currentPage.value >= pageNumber){
            showNext = false
            console.log(3);
        }else{
            showNext = true
            console.log(4);
            console.log(currentPage.value,pageNumber);
        }
        display = pagination(currentPage)
        console.log(display);
        console.log(showPrevious, showNext);
        return display
    })

    
</script>

<template>

    <div id="container">

        <div id="head">
            <h2>Transactions</h2>
            <input type="text" placeholder="Search by name" id="search">
            <i class="uil uil-search"></i>
            <select name="Filter" id="filter">
                <option value="" disabled selected hidden>Filter</option>
                <option value="None">No filter</option>
                <option value="Deposit">Deposit</option>
                <option value="Transfer">Transfer</option>
                <option value="Succesful">Succesful</option>
                <option value="Failed">Failed</option>
            </select>
            <i class="uil uil-filter"></i>
        </div>

        <div id="transaction-header">
            <p>Transaction Type</p>
            <p>Date</p>
            <p>Status</p>
            <p>Amount</p>
        </div>

        <div class="transaction" v-for="i in display.length" :key="i.id">
            <p>Wallet {{ display[i - 1].type }}</p>
            <p>{{ display[i - 1].date }} | <span class="time">{{ display[i - 1].time }}</span></p>
            <p class="before-last"><span :class="display[i - 1].status">• {{ display[i - 1].status }}</span></p>
            <p class="last">{{ display[i - 1].currency }} {{ display[i - 1].amount }}</p>
        </div>

        <div id="foot">

            <p>Showing Page {{ currentPage }} of {{ pageNumber }}</p>
            <p v-if="showPrevious" @click="currentPage --">Prev</p>
            <p v-if="pageNumber > 3">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>...</span>
                <span>{{ pageNumber }}</span>
            </p>
            <p v-if="pageNumber <= 3">
                <span>1</span>
                <span>2</span>
                <span>3</span>
            </p>
            <p v-if="showNext" @click="currentPage++">Next</p>

        </div>
    </div>
    
</template>

<style scoped>
    #container{
        height: 77%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        /* border: red 1px solid; */
    }
    
    #head{
        width: 100%;
        display: flex;
        gap: 2%;
        align-items: flex-start;
        padding-right: 2.5%;
        position: relative;
    }

    #head h2{
        text-align: left;
        width: 60%;
        padding-left: 2.5%;
        padding-bottom: 2vh;
        font-weight: bold;
    }
    
    #search{
        height: 2.5em;
        width: 28%;
        padding-left: 1vw;
        border-radius: 0.3em;
        border: 1px solid rgba(0, 0, 0, 0.204);
        color: rgba(0, 0, 0, 0.6);
    }

    #filter{
        width: 8%;
        height: 2.5em;
        border: 1px solid rgba(0, 0, 0, 0.204);
        appearance: none;
        color: rgba(0, 0, 0, 0.8);
        padding-left: 1vw;
        border-radius: 0.3em;
    }

    .uil-filter{
        position: absolute;
        right: 3vw;
        top: 0.7vh;
        opacity: 0.8;
    }

    .uil-search{
        position: absolute;
        top: 0.7vh;
        right: 11vw;
        opacity: 0.8;
    }

    option{
        color: rgba(0, 0, 0, 0.61);
        height: 2.5em;

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