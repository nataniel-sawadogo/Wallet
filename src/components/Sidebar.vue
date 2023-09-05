<script setup>
    import { defineEmits , ref , watch } from "vue"

    const emit = defineEmits(['clicked'])
    let links = {
        classes: [
            { value: ref('links active') },
            { value: ref('links') },
            { value: ref('links') }
        ]
    }
    
    const emitClicked = (option) => {
        emit('clicked', option)

        for ( let i = 0; i < links.classes.length; i++ ) {
            links.classes[i].value.value = 'links'
        }

        links.classes[ option - 1 ].value.value = 'links active'
    }

</script>

<template>
    <nav>
        <div id="title">
            <h2>Wallet</h2>
        </div>

        <div :class="links.classes[0].value.value" @click="emitClicked(1)">
            <p>Home</p>
        </div>
        <div :class="links.classes[1].value.value" @click="emitClicked(2)">
            <p>History</p>
        </div>
        <div :class="links.classes[2].value.value" @click="emitClicked(3)">
            <p>Profile</p>
        </div>

    </nav>
</template>

<style scoped>

    nav{
        background: linear-gradient(to right, navy, rgb(0, 0, 93));
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: 1em;
    }
    
    #title{
        color: white;
        padding-top: 2.5vh;
        padding-bottom: 2vh;
    }

    .links{
        width: 90%;
        height: 6%;
        /* border: red 1px solid; */
        color: white;
        opacity: 0.8;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border-radius: 0.2em;
        transition: ease 0.2s;
        padding-left: 1vw;
    }

    .active{
        background: rgba(255, 255, 255, 0.35) !important;
        opacity: 1;
        color: white;
    }

    .active:hover{
        background: rgba(255, 255, 255, 0.35);
        opacity: 1 !important;
        color: white;
    }

    .links:hover{
        opacity: 0.9;
        background: rgba(255, 255, 255, 0.3);
        cursor: pointer;
    }

</style>