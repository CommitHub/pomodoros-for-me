<template>
  <section id="login" class="page-container">
    <h1>Log In</h1>
    <FormulateForm
      v-model="formValues"
      class="login-form"
      @submit="loginUserWithEmailAndPassword"
    >
      <FormulateInput
        class="form-input"
        type="email"
        label="Email"
        name="email"
        placeholder="Email address"
        validation="required|email"
      />
      <FormulateInput
        class="form-input"
        type="password"
        label="Password"
        name="password"
        placeholder="Your password"
        validation="required"
      />
      <FormulateInput type="submit" label="Log In" />
    </FormulateForm>
    <div class="helpful-links-container">
      <router-link to="/reset-password">Forgot Password</router-link>
      <p>Not a member? <router-link to="/register">Register</router-link></p>
    </div>
  </section>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Login",
  data() {
    return {
      formValues: null
    };
  },
  methods: {
    loginUserWithEmailAndPassword: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(
          this.formValues.email,
          this.formValues.password
        )
        .then(() => {
          const user = firebase.auth().currentUser;
          this.$store.commit("addUser", {
            name: user.displayName,
            email: user.email
          });
          this.$router.push("/");
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>

<style lang="scss">
@import "../styles/variables.scss";
@import "../styles/general-styles.scss";
#login {
  .login-form {
    width: 90%;
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    .form-input {
      margin: 1rem 0;
    }
    input {
      width: 100%;
      padding: 1rem;
      margin: 0.5rem 0;
      border-radius: 0.5rem;
    }
    .formulate-input-error {
      color: $danger;
      margin: 1rem 0;
    }
    button {
      @extend .btn;
    }
  }

  .helpful-links-container {
    display: flex;

    a:first-child {
      margin-right: 1rem;
    }
  }
}
</style>
