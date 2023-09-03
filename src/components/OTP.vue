<script setup>
    import { ref } from 'vue';

    let digits = Array(4).fill({value: ' '})
    let countdown = 60
    const otpInput = ref([])
    console.log(otpInput);
    
    const onInput = (index) => {
        console.log("hi");
        if (digits[index].value) {
            console.log("hi2");
            if (index < digits.length - 1) {
              otpInput[index + 1].focus();
            }
        } else {
        if (index > 0) {
          otpInput[index - 1].focus();
        }
      }
    }
    
</script>

<template>
    <div id="container">

        <form action="">

            <h1>Kindly enter your OTP to verify account</h1>

            <input 
            v-for="(digit, index) in digits"
            :key="index"
            @input="onInput(index)"
            maxlength="1"
            :placeholder="index+1"
            :ref="otpInput"
            >

            <p>Didn't get the code? <span><a href="#">Resend</a></span></p>

            <p></p>

        </form>

    </div>
</template>
