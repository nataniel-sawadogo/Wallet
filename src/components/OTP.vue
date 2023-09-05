<template>
  <div id="container">
    <div class="otp-input">
    <div class="contain">
      <h2>Kindly enter your OTP to verify your account</h2>
    </div>
    <div class="otp-input-container contain">
      <input
        v-for="(digit, index) in otpDigits"
        :key="index"
        v-model="otpDigits[index]"
        ref="otpInput"
        @input="handleNonNumericInput(index); focusNextInput(index)"
        @keydown="handleBackspace(index, $event)"
        @keydown.enter="goToHome()"
        class="otp-digit"
        maxlength="1"
      />
    </div>
    <div class="resend-link contain">
      <p>Didn't get the code? <a href="#" @click="resendCode" :class="{ 'blue-link': !resendClicked }">Resend</a></p>
      <span v-if="resendClicked">{{ countdown }}</span>
    </div>
  </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  data() {
    return {
      otpDigits: ['', '', '', ''],
      countdown: 60,
      resendClicked: false,
      countdownInterval: null,
    };
  },
  setup(){
    const router = useRouter()
    document.title = 'Verify OTP'

    return {
      router: router
    }
  },
  methods: {
    focusNextInput(index) {
      if (index < this.otpDigits.length - 1 && this.otpDigits[index]) {
        this.$refs.otpInput[index + 1].focus();
      }
    },
    handleNonNumericInput(index) {
    if (isNaN(this.otpDigits[index])) {
      this.otpDigits[index] = ''; // Clear the input if it's not a number
    }
    },
    handleBackspace(index, event) {
      if (event.key === 'Backspace' && !this.otpDigits[index] && index > 0) {
        this.$refs.otpInput[index - 1].focus();
      }
    },
    resendCode() {
      if (!this.resendClicked) {
        this.resendClicked = true;
        this.countdownInterval = setInterval(() => {
          if (this.countdown > 0) {
            this.countdown--;
          } else {
            clearInterval(this.countdownInterval);
          }
        }, 1000);
      }
    },
    goToHome(){
      if(this.otpDigits[3] != ''){
        this.router.push('/login/pin')
      }
    }
  },
  computed: {
    otpEntered() {
      return this.otpDigits.join('').length === this.otpDigits.length;
    },
  },
  watch: {
    countdown(newVal) {
      if (newVal === 0) {
        clearInterval(this.countdownInterval);
        this.resendClicked = false;
        this.countdown = 60; // Reset the countdown
      }
    },
  },
};
</script>

<style scoped>
  #container{
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .otp-input{
    width: 70%;
    height: 40%;
    background: white;
    border: 1px solid rgba(172, 171, 171, 0.616);
    border-radius: 0.4em;
    display: flex;
    flex-direction: column;
    padding: 0 10%;
    justify-content: center;
    align-items: center;

  }

  .contain{
    height: 33%;
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h2{
    color: var(--darkblue);
    text-align: center;
    padding-top: 20%;
    font-weight: 500;
    padding-bottom: 10%;
  }

  input{
    width: 16%;
    height: 50%;
    border: 1px solid rgba(172, 171, 171, 0.616);
    border-radius: 0.3em;
  }

  input{
    text-align: center;
  }

  .otp-input-container{
    display: flex;
    justify-content: center;
    gap: 1.5em;
  }

  p{
    padding-bottom: 30%;
  }

  .resend-link{
    flex-direction: column;
    padding-top: 5%;
    position: relative;
  }

  span{
    position: absolute;
  }

  a{
    font-weight: 500;
  }
</style>
