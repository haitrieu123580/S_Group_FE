<template>
  <p v-if="isLoggedIn">Login successfully! </p>
  <div class="login-form">
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">username</label>
        <input type="text" name="username" v-model="username" id="username" placeholder="username">
      </div>
      <div class="form-group">
        <label for="password">password</label>
        <input type="password" name="password" v-model="password" id="password" placeholder="password">

      </div>
      <div class="form-group">
        <button type="submit" class="btn-primary" @click="login"> Login </button>
        <button type="button" class="btn-primary" @click="logout"> Logout </button>
      </div>
      <button>
        <router-link to="/register">Register</router-link>
      </button>

      <button>
        <a href="/forgot-password"> Forgot password</a>
      </button>

    </form>

  </div>
</template>

<script setup>
import { ref, computed, inject, defineProps } from 'vue';
import { notify } from '@kyvg/vue3-notification';
import axios from 'axios';
import { useRouter } from 'vue-router'; // Import đối tượng useRouter
import { useStore } from 'vuex';

const store = useStore()
const router = useRouter(); // Khởi tạo đối tượng router

const username = ref('');
const password = ref('');
const accessToken = ref(localStorage.getItem('accessToken'));
const isLoggedIn = computed(() => !!accessToken.value);

const onloginSuccess = () => {
  router.push('/dashboard');
};

const onlogoutSuccess = () => {
  router.push('/');
};

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

    if (response.data.accessToken) {
      notify({
        title: 'Success',
        text: "Login success",
        type: 'success',
        duration: 1000
      });
      localStorage.setItem('accessToken', JSON.stringify(response.data.accessToken));
      accessToken.value = localStorage.getItem('accessToken');

      // Sử dụng mutation để cập nhật authData trong store
      store.commit('setAuthData', {
        accessToken: response.data.accessToken,
        username: response.data.message.username
      });

      console.log('Login successfully ');

      onloginSuccess();
    }
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
    accessToken.value = null;
    notify({
      title: 'Success',
      text: "Logout success",
      type: 'success',
      duration: 1000
    });
    onlogoutSuccess();
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
<style>
.login-form {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
}

form {
  display: flex;
  flex-direction: column;
  width: 300px;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

label {
  margin-bottom: 0.5rem;
}

input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #eee;
  cursor: pointer;
}
</style>