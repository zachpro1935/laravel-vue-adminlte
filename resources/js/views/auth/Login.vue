<template>
   <div class="form-wrap">
    <form class="login">
      <p class="login-register">
        Don't have an account?
        <router-link class="router-link" to="#">Register</router-link>
      </p>
      <h2>Login Page</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="Email" v-model="email" />
          <i class="far fa-envelope icon"></i>
        </div>
        <div class="input">
          <input type="password" placeholder="Password" v-model="password" />
          <i class="fas fa-key icon"></i>
        </div>
        <div v-show="error" class="error">{{ errorMsg }}</div>
      </div>
      <router-link class="forgot-password" to="#">Forgot your password</router-link>
      <button @click.prevent="signIn">
        <span>Sign in</span>
      </button>
      <div class="angle"></div>
    </form>
    <div class="background">

    </div>
  </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            email: "",
            password: "",
            error: null,
            errorMsg: ""
        }
    },
    methods: {
        signIn() {
            if (this.email !== "" && this.password !== "") {
                this.error = false;
                this.errorMsg = "";
                this.$store.commit('Auth/SET_AUTH', true);
                setTimeout(() => {
                    this.$router.push({ name: 'Dashboard' })
                }, 1000);

            } else {
                this.error = true;
                this.errorMsg = "Please fill out all the fields!";
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '../../styles/views/login.scss';
</style>
