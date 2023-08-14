<template>
  <main>
    <notifications />
    <RouterView :authData="authData" />
  </main>
</template>

<script setup>
import { ref, provide } from 'vue';
import { RouterView } from 'vue-router';
import { useNotification } from "@kyvg/vue3-notification";

const { notify } = useNotification();

const authData = ref({
  accessToken: null,
  username: null,
  setAuthData(data) {
    authData.value = data;
  }
});

</script>