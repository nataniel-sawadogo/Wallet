<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <div id="container">

        <form action="">

            <div class="box">

                <p>Email Adress</p>
                <input type="text">

            </div>

            <div class="box">

                <p>Password</p>
                <input type="password">

            </div>

            <div class="box">

                <RouterLink to="/">Forgot Password?</RouterLink>

            </div>

            <div class="box">

                <button>Log in</button>

            </div>

            <div class="box">

                <p>Don't have an account? <span><RouterLink to="/login/signup">Register now</RouterLink></span></p>

            </div>

        </form>

    </div>
</template>

<style scoped>
    #container {
        height: 100vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 0px 7px rgba( 0, 0, 0, 0.2 );
        border-radius: 0.3em;
        height: 55%;
        width: 40%;
        padding-top: 2%;
    }

    .box{
        height: 15%;
        width: 100%;
        padding: 0 5%;
    }

    
    input{
        height: 50%;
        width: 100%;
        border: 1px solid rgba( 0, 0, 0, 0.3 );
        padding-left: 0.8em;
        border-radius: 0.3em;
    }

    p{
        color: rgb(101, 99, 99);
        padding-bottom: 0.3em;
    }


    button{
        width: 100%;
        height: 70%;
        font-weight: bold;
    }

    .box:nth-child(3){
        display: flex;
        align-items: center;
    }

    .box:nth-child(1), .box:nth-child(2){
        height: 20%;
    }

    .box:nth-child(1){
        margin-bottom: 2vh;
    }

    a{
        font-weight: 500;
    }
</style>