<template>
  <p v-if="isLoggedIn">Login successfully! </p>
  <form @submit.prevent="login">
    <div>
      <input type="text" name="username" v-model="username" id="username" placeholder="username">
      <label for="username">username</label>
    </div>
    <div>
      <input type="password" name="password" v-model="password" id="password" placeholder="password">
      <label for="password">password</label>
    </div>
    <button type="submit" class="btn-primary" @click="login"> Login </button>
    <button type="button" class="btn-primary" @click="logout"> Logout </button>
  </form>
  <router-link to="/register">Register</router-link>
  <div>
    <a href="/forgot-password"> Forgot password</a>
  </div>
</template>

<script setup>
import { ref, } from 'vue';
import { notify } from '@kyvg/vue3-notification';
import { computed } from 'vue';
import axios from 'axios';
const username = ref('');
const password = ref('');
const accessToken = ref(localStorage.getItem('accessToken'));
const isLoggedIn = computed(() => !!accessToken.value);
const login = async () => {
  try {
    const response = await axios({
      method: 'post',
      url: 'http://localhost:3000/auth/login',
      data: {
        username: username.value,
        password: password.value
      }
    })
    console.log(response);
    if (response.data.accessToken) {
      localStorage.setItem('accessToken', JSON.stringify(response.data.accessToken));
      accessToken.value = localStorage.getItem('accessToken');
    }
    console.log('Login successfully');
    notify({
      title: 'Success',
      text: "Login success",
      type: 'success',
      duration: 1000
    });
  } catch (error) {
    console.log(error);
    notify({
      title: 'Failed',
      text: "Login error",
      type: 'error',
      duration: 1000
    });
  }
};
const logout = () => {
  try {
    localStorage.removeItem('accessToken');
    accessToken.value =null
    notify({
      title: 'Success',
      text: "Logout success",
      type: 'success',
      duration: 1000
    });
  } catch (error) {
    console.log(error);
    notify({
      title: 'Failed',
      text: "Logout error",
      type: 'error',
      duration: 1000
    });
  }
};

</script>