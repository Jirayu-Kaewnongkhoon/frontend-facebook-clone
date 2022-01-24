<template>
    <div class="login-form">
        <form>
            <h2>Login</h2>

            <label for="email">Email</label>
            <input type="text" v-model="email" required />
            <div class="email error">{{ emailError }}</div>

            <label for="password">Password</label>
            <input type="password" v-model="password" required />
            <div class="password error">{{ passwordError }}</div>

            <div class="form-button">
                <button @click="login">login</button>
                <button class="register" @click="goToRegister">register</button>
            </div>
        </form>
    </div>
</template>

<script>
import { useAxios } from '../guard/axiosInterceptor';

export default {
    data() {
        return {
            email: '',
            password: '',
            emailError: '',
            passwordError: '',
        }
    },
    methods: {
        goToRegister() {
            this.$router.replace({ name: 'Register' });
        },
        async login(e) {
            e.preventDefault();

            this.resetError();

            try {

                const { data } = await useAxios.post('/auth/login', {
                    email: this.email,
                    password: this.password
                });
                
                if (data.user) {
                    localStorage.setItem('user', JSON.stringify(data.user));
                    this.$router.replace({ name: 'Home'});
                }
                
            } catch (error) {

                // TODO: เพิ่ม dialog สำหรับแต่ละ error

                const errors = error.response.data.errors;

                this.emailError = errors.email;
                this.passwordError = errors.password;
            }
                
        },
        resetError() {
            this.emailError = '';
            this.passwordError = '';
        }
    }
}
</script>

<style scoped>
    .login-form {
        height: 100vh;
        margin-top: 0;
        display: grid;
        place-items: center;
    }
    form{
        width: 360px;
        margin: 0 auto;
        padding: 30px;
        box-shadow: 1px 2px 3px rgba(0,0,0,0.1);
        border-radius: 10px;
        background: white;
    }
    form h2{
        font-size: 2.4em;
        font-weight: 900;
        margin-bottom: 40px;
    }
    input{
        padding: 10px 12px;
        border-radius: 4px;
        border: 1px solid #ddd;
        box-sizing: border-box;
        font-size: 1em;
        width: 100%;
    }
    label{
        display: block;
        margin: 20px 0 10px;
    }
    .form-button {
        display: flex;
        justify-content: space-between;
    }
    button.register {
        background: hsl(209, 100%, 80%) !important;
    }
    button{
        margin-top: 30px;
        border-radius: 36px;
        background: hsl(209, 100%, 60%);
        border:0;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 0.8em;
        display: block;
        padding: 10px 16px;
        letter-spacing: 2px;
    }
    button:hover {
        cursor: pointer;
    }
    .error{
        color: #ff0099;
        margin: 10px 2px;
        font-size: 0.8em;
        font-weight: bold;
    }
</style>