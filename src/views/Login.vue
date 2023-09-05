<script setup>
    import { RouterLink , RouterView , useRoute} from 'vue-router';
    import Signup from '../components/Signup.vue'
    import Signin from '../components/Signin.vue';
    import RecoverPassword from '../components/RecoverPassword.vue';
    import OTP from '../components/OTP.vue';
    import PIN from '../components/PIN.vue'
    import { computed } from 'vue';

    const route = useRoute()
    console.log(route);
    const routeName = computed(() => route.params.logorsign)
    console.log(routeName);
</script>

<template>

    <div class="container" v-if="routeName === 'signup'">
        <div class="description">
            <img src="../assets/images/wallet-icon.svg" alt="">
            <h1>Create Your Account</h1>
            <p>Let's get you started</p>
        </div>
        <Signup />
    </div>

    <div class="container"  v-if="routeName === 'signin'">
        <div class="description">
            <img src="../assets/images/wallet-icon.svg" alt="">
            <h1>Log In</h1>
            <p>Great to have you back</p>
        </div>
        <Signin />
    </div>

    <div class="container"  v-if="routeName === 'recover'">
        <div class="description">
            <img src="../assets/images/wallet-icon.svg" alt="">
            <h1>Forgot Password</h1>
            <p>Kindly enter your registered email to reset your password</p>
        </div>
        <RecoverPassword />
    </div>

    <div class="container" v-if="routeName === 'otp'">
        <div class="description">
            <img src="../assets/images/wallet-icon.svg" alt="">
            <h1>OTP Verification</h1>
            <p>A code has been sent to your email</p>
        </div>
        <OTP />
    </div>

    <div class="container" v-if="routeName === 'pin'">
        <div class="description">
            <img src="../assets/images/wallet-icon.svg" alt="">
            <h1>Create Pin</h1>
            <p>Create pin to enable transfer</p>
        </div>
        <PIN />
    </div>

</template>

<style scoped>
    .container{
        height: 100vh;
        width: 100%;
        display: flex;
        background: rgba(184, 183, 213, 0.14);
    }

    .description{
        height: 100%;
        width: 50%;
        display: flex;
        flex-direction: column;
        padding-left: 10vw;
    }

    .description img{
        height: 5em;
        width: 5em;
        margin-top: 5vh;
    }

    .description h1{
        margin-top: 10vh;
        color: var(--darkblue);
        font-size: 3.5em;
        font-weight: 600;
    }

    .description p{
        margin-top: 3vh;
        color: rgb(189, 186, 186);
        font-size: 2em;
    }
</style>