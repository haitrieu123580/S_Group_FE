<template>
  <!-- <button type="button" class="btn-primary" @click="logout"> Logout </button> -->

  <button
    class="flex items-center block text-gray-500 py-2.5 px-4 my-2 rounded transition duration-200 hover:bg-gradient-to-r hover:from-sky-500 hover:to-cyan-500 hover:text-white mt-auto bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-4 rounded"
    @click="logout">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
      class="w-6 h-6 mr-2">

      <path stroke-linecap="round" stroke-linejoin="round"
        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
    </svg>
    <span>Logout</span>
  </button>
</template>
<script setup>
import { notify } from '@kyvg/vue3-notification';
const accessToken = ref(localStorage.getItem('accessToken'));
import { ref, } from 'vue';
import { useRouter } from 'vue-router'; // Import đối tượng useRouter
const router = useRouter(); // Khởi tạo đối tượng router
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
    router.push('/');
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