<script setup>
    import { RouterLink } from 'vue-router';
    import { useRouter } from 'vue-router';

    document.title = "Sign Up"

    const router = useRouter()

    let visible = false
    let type = "password"
    const toggleShowPassword = () => {
        visible = !visible

        if (visible) {
            return type = "text"
        }

        if (!visible) {
            return type = "password"
        }
        console.log(type, visible);
    }

    const goToHome = () => {
        router.push('/')
    }
</script>

<template>
    <div id="container">
    
            <form action="">
    
            <div class="box">
            
                <div class="inner-box">
                    <p>First Name</p>
                    <input type="text" required>
                </div>
            
                <div class="inner-box">
                    <p>Last Name</p>
                    <input type="text" required>
                </div>
            
            </div>

            <div class="box">
            
                <p>Email Address</p>
                <input type="email" required>
            
            </div>

            <div class="box">
            
                <p>Phone number</p>
                <input type="text" required>
            
            </div>

            <div class="box">
            
                <p>Password</p>
                <input required :type=type >
                <i class="fa fa-eye-slash" aria-hidden="true" @click="toggleShowPassword()" v-if="!visible"></i>
                <i class="fa fa-eye" aria-hidden="true" @click="toggleShowPassword()" v-if="visible"></i>
            
            </div>

            <div class="box">
            
                <button @click="goToHome()">Create Account</button>
            
            </div>

            <div class="box">
            
                <p>Already have an account? <span><RouterLink to="/login/signin">Sign In</RouterLink></span></p>
            
            </div>

        </form>

    </div>
</template>

<style scoped>
    #container{
        height: 100vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    p{
        color: rgb(101, 99, 99);
        padding-bottom: 0.3em;
    }

    a{
        font-weight: 500;
    }

    .box{
        height: 15%;
        width: 100%;
        padding: 0 5%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        /* border: red 1px solid; */
    }

    .box:nth-child(1){
        flex-direction: row;
        justify-content: space-between;
    }

    .inner-box{
        width: 48%;
    }
    

    input{
        border-radius: 0.3em;
        width: 100%;
        height: 50%;
        border: 1px solid rgba( 0, 0, 0, 0.3 );
        padding-left: 0.8em;
    }

    form{
        height: 70%;
        width: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 0px 7px rgba( 0, 0, 0, 0.2 );
        border-radius: 0.3em;
    }

    button{
        height: 50%;
        width: 90%;
        font-weight: bold;
        position: absolute;
        bottom: 0.2vh;
    }

    .fa-eye-slash{
        position: absolute;
        right: 7%;
        top: 60%;
        cursor: pointer;
    }
</style>