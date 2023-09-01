<script setup>
    import { RouterLink } from 'vue-router';
    document.title = "Recover Password"
</script>

<template>
    <div id="container">

        <form action="">

            <div class="box">
                <p>Email Adress</p>
                <input type="email">
            </div>
            <div class="box">
                <button>Recover Password</button>
            </div>
            <div class="box">
                <RouterLink to="/login/signin">Return to Lg in</RouterLink>
            </div>

        </form>

    </div>
</template>