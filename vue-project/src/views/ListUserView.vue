<template>
  <div class="mt-8 bg-white p-4 shadow rounded-lg">
    <div class="flex items-center justify-between">
      <h2 class="text-gray-500 text-lg font-semibold pb-4">USERS</h2>
      <!-- Add New User -->
      <div class="text-right">
        <button class="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded"
          @click="isAddUser = true">
          Add New User
        </button>
      </div>

    </div>
    <div class="max-h-[40rem] overflow-y-auto">
      <table class="w-full table-auto text-sm">
        <thead>
          <tr
            class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light text-left">
            <th v-for="(column, index) in tableColumns" :key="index">
              {{ column }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id" class="hover:bg-grey-lighter">
            <UserCard :user="user" @deleteUser="onDeleteUser" @showUserForm="FormID = user.id" />
            <UserForm v-show="user.id === FormID" @hideUserForm="FormID = null" :user="user" :title="'Update User'" />
          </tr>
        </tbody>
      </table>
      <UserForm v-show="isAddUser" @hideUserForm="isAddUser = false" :user="defaultUser" :title="'Add New User'" />
    </div>
  </div>
  <!-- pagination -->
  <!-- <nav aria-label="Page navigation" class="mt-8 bg-white p-4 shadow rounded-lg">
    <ul class="space-x-2 flex items-center justify-center">
      <li><button
          class="flex items-cente justify-center w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100">
          <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd" fill-rule="evenodd"></path>
          </svg></button>
      </li>
      <li><button
          class="w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100">1</button>
      </li>
      <li><button
          class="w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100">2</button>
      </li>
      <li><button
          class="w-10 h-10 text-white transition-colors duration-150 bg-indigo-600 border border-r-0 border-indigo-600 rounded-full focus:shadow-outline">3</button>
      </li>
      <li><button
          class="flex items-center justify-center w-10 h-10 text-indigo-600 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-indigo-100">
          <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd" fill-rule="evenodd"></path>
          </svg></button>
      </li>
    </ul>
  </nav> -->
</template>
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { notify } from '@kyvg/vue3-notification';
import UserCard from '../components/User/UserCard.vue';
import UserForm from '../components/User/UserForm.vue';

const accessToken = ref(localStorage.getItem('accessToken'));
const bearerToken = JSON.parse(accessToken.value);

const users = ref([]);
const tableColumns = ref([
  "user",
  "gender",
  "Username",
  "CreatedAt",
  "actions",
]);
const FormID = ref(null);
const isAddUser = ref(false);
const defaultUser = ref({});

const onDeleteUser = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:3000/users/${id}`, {
      headers: {
        'Authorization': `Bearer ${bearerToken}`,
      },
    });

    if (response.status === 200) {
      notify({
        title: 'Success',
        text: response.data.message,
        type: 'success',
        duration: 1000,
      });
      window.location.reload();
    } else {
      notify({
        title: 'User not found',
        text: response.data.message,
        type: 'warn',
        duration: 1000,
      });
    }
  } catch (error) {
    notify({
      title: 'Error',
      text: 'Error',
      type: 'error',
      duration: 1000,
    });
  }
};

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/users/get-users', {
      headers: {
        'Authorization': `Bearer ${bearerToken}`,
      },
    });

    users.value = response.data.users;
  } catch (error) {
    console.log(error);
  }
});

</script>
<style scoped>
.container {
  padding: 30px 0;
  margin: 0 auto;
}
</style>