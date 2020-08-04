<template>
  <section id="reset-pw" class="page-container">
    <h1>Reset Password</h1>
    <FormulateForm
      v-model="formValues"
      class="reset-form"
      @submit="resetPassword"
    >
      <FormulateInput
        class="form-input"
        type="email"
        label="Email"
        name="email"
        placeholder="Email address"
        validation="required|email"
      />
      <FormulateInput type="submit" label="Reset Password" />
    </FormulateForm>
    <Toaster
      v-if="toaster.alert"
      :icon="toaster.icon"
      :type="toaster.type"
      :message="toaster.message"
    />
  </section>
</template>

<script>
import firebase from "firebase";
import Toaster from "../components/Toaster.vue";

export default {
  name: "ResetPW",
  components: {
    Toaster
  },
  data() {
    return {
      formValues: null,
      toaster: {
        alert: null,
        icon: "",
        type: "",
        message: ""
      }
    };
  },
  methods: {
    resetPassword: function() {
      firebase
        .auth()
        .sendPasswordResetEmail(this.formValues.email)
        .then(() => {
          this.alert(
            "inbox",
            "success",
            "Please check your inbox to reset your password"
          );
        })
        .catch(err => {
          console.error(err);
          this.alert("bug", "danger", err);
        });
    },
    alert: function(icon, type, message) {
      this.toaster = {
        alert: true,
        icon,
        type,
        message
      };
      setTimeout(this.clearAlert, 5000);
    },
    clearAlert: function() {
      this.toaster = {
        alert: null,
        icon: "",
        type: "",
        message: ""
      };
    }
  }
};
</script>

<style lang="scss">
@import "../styles/variables.scss";
@import "../styles/general-styles.scss";
#reset-pw {
  .reset-form {
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
