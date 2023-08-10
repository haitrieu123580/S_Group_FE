<script setup>
import { RouterView } from 'vue-router';
import { useNotification } from "@kyvg/vue3-notification";

const { notify } = useNotification()
</script>

<template>
  <main>
    <notifications />
    <RouterView></RouterView>
  </main>
</template>
