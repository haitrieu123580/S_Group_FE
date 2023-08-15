<template>
  <td class="py-2 px-4 border-b border-grey-light" :class="isDelete ? 'delete' : ''">
    <div class="flex items-center">
      <div class="mx-3">
        <p>{{ user.name }}</p>
        <b>{{ user.email }}</b>
      </div>
    </div>
  </td>
  <td class="py-2 px-4 border-b border-grey-light">
    <div v-if="user.gender">Female</div>
    <div v-else>Male</div>
  </td>
  <td class="py-2 px-4 border-b border-grey-light">
    {{ user.username }}
  </td>
  <td class="py-2 px-4 border-b border-grey-light">
    {{ user.createdAt.split("T")[0] }}
  </td>
  <td class="py-2 px-4 border-b border-grey-light flex items-stretch">
    <button @click="$emit('showUserForm', parseInt(user.id))"
      class="rounded-full bg-sky-500 px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:bg-sky-600 active:bg-sky-700 flex items-center mr-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="popup w-5 h-5 mr-2 text-white-400" fill="none" viewBox="0 0 24 24"
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z">
        </path>
      </svg>
      Edit
    </button>
    <button @click="$emit('deleteUser', user.id)"
      class="rounded-full bg-red-500 px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:bg-red-600 active:bg-re-700 flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="popup w-5 h-5 mr-2 text-white-400" fill="none" viewBox="0 0 24 24"
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
        </path>
      </svg>
      Delete
    </button>
  </td>
</template>
  
<script setup>
import { ref, } from 'vue';
const accessToken = ref(localStorage.getItem('accessToken'));
const props = defineProps({
  user: Object,
  title: String,
});
const isDelete = ref(false);
</script>
<style scoped>
.delete {
  display: none;
}
</style>