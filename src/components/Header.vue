<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    const router = useRouter()

    const goToLogin = () => {
        router.push('/login/signin')
    }

    let showList = ref(false)

    const show = () => {
        showList.value = !showList.value
        console.log('ok');
    }
</script>

<template>
    <div id="container">
        <i class="fa fa-bell-o" aria-hidden="true"></i>
        <div class="inner">
            <p>Kingsley Quinn <span @click="show()"><i class="fa fa-caret-down" aria-hidden="true"></i></span> </p>
            <p v-if="showList" @click="goToLogin()">Log out</p>
        </div>
    </div>
</template>

<style scoped>
    #container{
        display: flex;
        gap: 1.5em;
        justify-content: flex-end;
        width: 100%;
        padding-right: 3em;
        height: 13%;
        padding-top: 2vh;
    }

    .inner{
        display: flex;
        flex-direction: column;
    }

    .inner p:nth-child(2) {
        padding: 0.4em 0.7em;
        border-radius: 0.3em;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
        transition: 0.2s ease;
        cursor: pointer;
    }

    .inner p:nth-child(2):hover{
        background: rgba(128, 128, 128, 0.147);
    }

    .fa-bell-o{
        margin-top: 0.8vh;
    }
</style>