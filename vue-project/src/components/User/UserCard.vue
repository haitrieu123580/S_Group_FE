<template>
  
    <td class="py-4">
      <div class="flex items-center">
        <div class="mx-3">
          <p>{{ user.name }}</p>
          <b>{{ user.email }}</b>
        </div>
      </div>
    </td> 
    <td class="py-4">
      <div class="mx-3">{{ user.gender }}</div>
      </td>
    <td>
      {{ user.username }}
    </td>
    <td>{{ user.createdAt.split("T")[0] }}</td>
    <td class="py-4 flex items-center" >
      <button @click="editUser(user.id)"
        class="popup hover:bg-gray-400 hover:text-white text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm">
        <svg xmlns="http://www.w3.org/2000/svg" class="popup w-5 h-5 mr-2 text-violet-400" fill="none" viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z">
          </path>
        </svg>
        Edit
      </button>
      <button @click="onDelete(user.id)"
        class="popup hover:bg-red-400 hover:text-white text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm">
        <svg xmlns="http://www.w3.org/2000/svg" class="popup w-5 h-5 mr-2 text-violet-400" fill="none" viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
          </path>
        </svg>
        Delete
      </button>
    </td>
 
</template>
  
<script>
import axios from 'axios';
import { ref, } from 'vue';
import { notify } from '@kyvg/vue3-notification';
const accessToken = ref(localStorage.getItem('accessToken'));
export default {
  name: 'UserCard',
  props: ['user'],
  data() {
    return {
      isShowPopUp: false,
    };
  },
  methods: {
    async onDelete(id) {
      const bearerToken = accessToken.value.slice(1, -1);
      try {
        const response = await axios({
          method: 'delete',
          url: `http://localhost:3000/users/${id}`,
          headers: {
            'Authorization': "Bearer " + bearerToken,
          },
        })
        if (response.status === 200) {
          notify({
            title: 'Success',
            text: response.data.message,
            type: 'success',
            duration: 1000
          });
        }
        else{
          notify({
            title: 'User not found',
            text: response.data.message,
            type: 'warn',
            duration: 1000
          });
        }
      } catch (error) {
        notify({
            title: 'error',
            text: 'Error',
            type: 'error',
            duration: 1000
          });
      }

    },

  },
  mounted() {

  },
};


</script>