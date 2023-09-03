<script setup>
    import { RouterLink , RouterView , useRoute} from 'vue-router';
    import Signup from '../components/Signup.vue'
    import Signin from '../components/Signin.vue';
    import RecoverPassword from '../components/RecoverPassword.vue';
    import OTP from '../components/OTP.vue';
    import { computed } from 'vue';

    const route = useRoute()
    console.log(route);
    const routeName = computed(() => route.params.logorsign)
    console.log(routeName);
</script>

<template>
    <Signup v-if="routeName === 'signup'"/>
    <Signin v-if="routeName === 'signin'" />
    <RecoverPassword v-if="routeName === 'recover'" />
    <OTP v-if="routeName === 'otp'" />
</template>