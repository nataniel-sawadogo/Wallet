<script setup>
    import { RouterLink , RouterView , useRoute} from 'vue-router';
    import Signup from '../components/Signup.vue'
    import Signin from '../components/Signin.vue';
    import { computed } from 'vue';

    const route = useRoute()
    console.log(route);
    const routeName = computed(() => route.params.logorsign)
    console.log(routeName);
</script>

<template>
    <Signup v-if="routeName === 'signup'"/>
    <Signin v-else />
</template>