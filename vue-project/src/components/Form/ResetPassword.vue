<template>
    <div class="reset-form">
      <h1>Reset password</h1>
      <form @submit.prevent="submitNewPass">
        <input type="email" v-model="email" placeholder="Email">
        <input type="text" v-model="passwordResetToken" placeholder="Token">
        <input type="password" v-model="newPassword" placeholder="new Password">
        <input type="submit"  @click="submitNewPass">
        </form>
    </div>
  </template>
  
  <script setup>
  
  import { ref, reactive, computed } from 'vue';
  import axios from 'axios';
  const email = ref('');
  const passwordResetToken = ref('');
  const newPassword = ref('');
  const isFormValid = computed(() => {
    return email.value !== '';

  });
  
  const submitNewPass = () => {
    if (!isFormValid.value) {
      return;
    }
    axios.post('http://localhost:3000/auth/reset-password', {
      email: email.value,
      passwordResetToken: passwordResetToken.value,
      newPassword: newPassword.value
    }).then(response => {
      if (response.status === 400) {
        console.log(response.data.message);
      } else {
        console.log(response);
      }
    }).catch(error => {
        console.log(error);
    });
  };
  </script>
  
  <style scoped>
  .reset-form {
    width: 500px;
    margin: 100px auto;
  }
  
  input {
    width: 100%;
    margin-bottom: 10px;
  }
  
  input[type="submit"] {
    background-color: #000;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>