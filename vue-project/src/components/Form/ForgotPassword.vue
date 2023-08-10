<template>
    <div class="submitEmail-form">
      <h1>Forgot password</h1>
      <form @submit.prevent="submitEmail">
        <input type="email" v-model="email" placeholder="Email">
        <input type="submit"  @click="submitEmail">
        </form>
    </div>
  </template>
  
  <script setup>
  
  import { ref, reactive, computed } from 'vue';
  import axios from 'axios';
  const email = ref('');
  const isFormValid = computed(() => {
    return email.value !== '';

  });
  
  const submitEmail = () => {
    if (!isFormValid.value) {
      return;
    }
    axios.post('http://localhost:3000/auth/forgot-password', {
      email: email.value,
    }).then(response => {
      if (response.status === 200) {
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
  .submitEmail-form {
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