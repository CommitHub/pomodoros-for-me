<template>
  <section id="register" class="page-container">
    <h1>Register</h1>
    <FormulateForm
      v-model="formValues"
      class="register-form"
      @submit="registerUserWithEmailAndPassword"
    >
      <FormulateInput
        class="form-input"
        type="text"
        label="Name"
        name="name"
        placeholder="Your name"
        validation="required|max:120"
      />
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
        validation="required|max:120|min:8"
      />
      <FormulateInput
        class="form-input"
        name="password_confirm"
        type="password"
        label="Confirm your password"
        placeholder="Confirm password"
        validation="required|confirm"
        validation-name="Confirmation"
      />
      <FormulateInput type="submit" label="Register" />
    </FormulateForm>
  </section>
</template>

<script>
import firebase from "firebase";
import moment from "moment";
import db from "../firebase/firebaseInit.js";

export default {
  name: "Register",
  data() {
    return {
      formValues: null
    };
  },
  methods: {
    registerUserWithEmailAndPassword: function() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(
          this.formValues.email,
          this.formValues.password
        )
        .then(() => {
          const user = firebase.auth().currentUser;

          user
            .updateProfile({
              displayName: this.formValues.name
            })
            .then(() => {
              db.collection("users")
                .add({
                  name: this.formValues.name,
                  email: this.formValues.email,
                  role: "user",
                  premium: false,
                  created: moment()
                    .utc()
                    .toISOString(),
                  updated: moment()
                    .utc()
                    .toISOString()
                })
                .then(doc => {
                  this.$store.commit("addUser", doc);
                  this.$router.push("/");
                })
                .catch(err => {
                  this.$store.commit("logOut");
                  console.error(err);
                  user.delete().catch(function(err) {
                    console.error(err);
                  });
                });
            })
            .catch(function(err) {
              this.$store.commit("logOut");
              console.error(err);
              user.delete().catch(function(err) {
                console.error(err);
              });
            });
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

#register {
  .register-form {
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
}
</style>
