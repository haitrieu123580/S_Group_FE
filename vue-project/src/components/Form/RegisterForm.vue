<template>
  <div class="register-form">
    <h1>Đăng ký</h1>
    <form @submit.prevent="register">
      <div class="form-group">
        <input type="text" v-model="username" placeholder="Username">
      </div>
      <div class="form-group">
        <input type="password" v-model="password" placeholder="password">
      </div>
      <div class="form-group">
        <input type="password" v-model="confirmPassword" placeholder="confirm Password">
      </div>
      <div class="form-group">
        <input type="email" v-model="email" placeholder="Email">
      </div>
      <div class="form-group" style="    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;">
        <label for="Male">Nam</label>
        <input type="radio" v-model="gender" value="true" id="Male">
        <label for="Female">Nữ</label>
        <input type="radio" v-model="gender" value="false" id="Female">
      </div>
      <div class="form-group">
        <input type="text" v-model="name" placeholder="Name">
      </div>
      <div class="form-group">
        <input type="number" v-model="age" placeholder="Age">
      </div>
      <div class="form-group">
        <input type="submit" value="Register" @click="register">
      </div>
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
const onRegisterSuccess = () => {
  window.location.href = "/login";
};
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
      onRegisterSuccess()
    } else {
      console.log(response);
    }
  }).catch(error => {
    console.log(error);
  });
};
</script>
  
<style scoped>
.register-form {
  width: 500px;
  margin: 100px auto;
}

input[type="submit"] {
  background-color: #000;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
</style>