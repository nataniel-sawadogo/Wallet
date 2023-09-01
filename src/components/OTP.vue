<script setup>
    import { ref } from 'vue';

    let time = 60
    resendClicked = false
    let digits = Array(4).fill({value: ''})

    const onInput = (index) => {
        if (digits(index).value) {

            if ( index < digits.length - 1 ) {

                

            }

        }
    }

    const resendOTP = () => {
        
    }
</script>

<template>
    <div id="container">

        <form action="">

            <h1>Kindly enter your OTP to verify account</h1>

            <input 
            type="text"
            v-for="(digit, index) in digits"
            v-model="digits[index]"
            :key="index"
            maxlength="1"
            :placeholder="index+1"
            >

            <p>Didn't get the code? <span><a href="#">Resend</a></span></p>

            <p></p>

        </form>

    </div>
</template>