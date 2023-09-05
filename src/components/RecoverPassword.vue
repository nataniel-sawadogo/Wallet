<script setup>
    import { RouterLink } from 'vue-router';
    document.title = "Recover Password"
</script>

<template>
    <div id="container">

        <form action="">

            <div class="box">
                <p>Email Address</p>
                <input type="email">
            </div>
            <div class="box">
                <button>Recover Password</button>
            </div>
            <div class="box">
                <RouterLink to="/login/signin">Return to Log in</RouterLink>
            </div>

        </form>

    </div>
</template>

<style scoped>
    #container{
        height: 100%;
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    form{
        background: white;
        height: 40%;
        width: 80%;
        border-radius: 0.3em;
        border: 1px solid rgba(172, 171, 171, 0.616);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5em;
    }

    p{
        color: rgb(101, 99, 99);
        padding-bottom: 0.3em;
    }

    input{
        border-radius: 0.3em;
        width: 100%;
        height: 60%;
        border: 1px solid rgba( 0, 0, 0, 0.3 );
        padding-left: 0.8em;
    }

    .box{
        height: 25%;
        width: 100%;
        padding: 0 5%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        /* border: red 1px solid; */
    }

    button{
        height: 60%;
        width: 90%;
        font-weight: bold;
        position: absolute;
        bottom: 0.2vh;
    }
    a{
        width: 100%;
        text-align: center;
        font-weight: bold;
    }
</style>