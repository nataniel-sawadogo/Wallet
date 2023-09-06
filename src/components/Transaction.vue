<script setup>
    import { defineProps , ref } from 'vue';

    const emit = defineEmits(['close'])
    const backdrop = ref(null)
    const widget = ref(null)

    const { type , showTransaction } = defineProps(['type', 'showTransaction'])

    const emitClosed = (option) => {
        emit( 'close' , option )
    }
</script>

<template>
    <div id="container">
        <div id="backdrop" ref="backdrop"></div>
        <div id="inner-container" ref="widget">

            <div id="header">
                <p>{{ type.name }}</p>
                <span @click="emitClosed(true)">+</span>
            </div>

            <div class="box">
                <p class="type">{{ type.text }}</p>
                <div id="inputs">
                    <div class="radio">
                        <input type="radio" value="naira">
                        <label for="naira">Naira</label>
                    </div>
                    <div class="radio">
                        <input type="radio" value="dollar">
                        <label for="dollar">Dollar</label>
                    </div>
                </div>
            </div>

            <div class="box" v-if="type.showAccountNumber">
                <p>Account Number</p>
                <input type="text" placeholder="23456788901">
            </div>

            <div class="box" v-if="type.showAmount">
                <p>Amount</p>
                <input type="text" placeholder="$ 00.00">
            </div>
                
            <div class="box" v-if="type.showPin">
                <p>Pin</p>
                <input type="password" maxlength="4">
            </div>

            <div class="box">
                <button>{{ type.name }}</button>
            </div>

        </div>
    </div>
</template>

<style scoped>
    #container{
        height: 100vh;
        width: 100vw;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
    }

    #backdrop{
        height: 100%;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.138);
        z-index: 1;
    }

    #inner-container{
        height: 100%;
        width: 35%;
        background: white;
        z-index: 2;
        position: fixed;
        right: 0;
        gap: 1em;
        display: flex;
        flex-direction: column;
    }

    #header{
        width: 100%;
        height: 12%;
        display: flex;
        justify-content: space-between;
        padding-left: 5%;
        padding-right: 5%;
        padding-top: 2%;
        padding-bottom: 2%;
        border-bottom: 1px solid rgb(183, 180, 180);
    }

    #header p{
        font-size: 1.8em;
        color: var(--darkblue);
        padding-top: 0.35em;
        /* font-size: bold; */
    }

    #header span{
        font-size: 2.2em;
        rotate: 45deg;
        cursor: pointer;
    }

    #inputs{
        display: flex;
        width: 100%;
        gap: 6em;
    }

    .box{
        padding: 0 5%;
        width: 100%;
        height: 10%;
        /* border: red 1px solid; */
    }

    .radio{
        display: flex;
        gap: 0.5em;
        justify-content: center;
        align-items: center;
    }

    .type{
        color: var(--darkblue) !important;
        font-weight: bold;
        padding-top: 2vh;
    }

    .box p{
        color: rgb(138, 137, 137);
        padding-bottom: 0.5em;
    }

    .box input{
        width: 100%;
        height: 50%;
        padding-left: 1em;
    }

    button{
        height: 50%;
        width: 100%;
        margin-top: 1em;
    }

    @keyframes slide{
        0%{
            transform: translateX(35vw);
        }
        100%{
            transform: translateX(0);
        }
    }
</style>