<template>
    <div class="register-form">
      <h1>Đăng ký</h1>
      <form @submit.prevent="register">
        <input type="text" v-model="username" placeholder="Username">
        <input type="password" v-model="password" placeholder="password">
        <input type="password" v-model="confirmPassword" placeholder="confirm Password">
        <input type="email" v-model="email" placeholder="Email">
        <input type="radio" v-model="gender" value="true"> Nam
        <input type="radio" v-model="gender" value="false"> Nữ
        <input type="text" v-model="name" placeholder="Name">
        <input type="number" v-model="age" placeholder="Age">
        <input type="submit" value="Register"  @click="register">
      </form>
    </div>
  </template>
  
  <script setup>
  
  import { ref, reactive, computed } from 'vue';
  import axios from 'axios';
  const username = ref('');
  const password = ref('');
  const confirmPassword = ref('');
  const email = ref('');
  const gender = ref(true);
  const name = ref('');
  const age = ref('');
  
  const isFormValid = computed(() => {
    return username.value !== '' &&
      password.value !== '' &&
      confirmPassword.value === password.value &&
      email.value !== '' &&
      gender.value !== undefined &&
      name.value !== '' &&
      age.value !== '';
  });
  
  const register = () => {
    if (!isFormValid.value) {
      return;
    }
    axios.post('http://localhost:3000/auth/register', {
      username: username.value,
      password: password.value,
      email: email.value,
      gender: gender.value === true,
      name: name.value,
      age: age.value,
      confirmPassword: confirmPassword.value,
    }).then(response => {

      if (response.status === 201) {
        console.log(response.data.message);
      } else {
        console.log(response);
      }
    }).catch(error => {
        console.log(error);
    });
  };
  </script>
  
  <style>
  .register-form {
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