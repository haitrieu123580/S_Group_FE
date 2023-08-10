<template>
<button type="button" class="btn-primary" @click="logout"> Logout </button>
</template>
<script setup>
import { notify } from '@kyvg/vue3-notification';
const accessToken = ref(localStorage.getItem('accessToken'));
import { ref, } from 'vue';
const logout = () => {
  try {
    localStorage.removeItem('accessToken');
    accessToken.value = null
    notify({
      title: 'Success',
      text: "Logout success",
      type: 'success',
      duration: 1000
    });
    window.location.href = "/";
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