<template>
  <div class="container">
    <div class="content">
      <div class="content-header flex justify-between">
        <input type="search" placeholder="Search User" class="border-2 px-2 py-2" v-model="searchQuery" />
        <button class="btn btn-add bg-blue-700 text-white px-3 py-3 rounded hover:bg-blue-600">
          + Create New
        </button>
      </div>
      <!-- <div class="content-body mt-10">
        <div v-for="user in users" :key="user.id">
          <UserCard :user="user" />
        </div>
      </div> -->
      <table class=" w-3/4 mt-6 mx-auto text-left">
        <thead class="text-xs text-gray-700 uppercase py-4 bg-white">
          <tr scope="col" class="px-6 py-3  bg-white">
            <th v-for="(column, index) in tableColumns" :key="index">
              {{ column }}
            </th>
          </tr>
        </thead>
        <tr v-for="user in users" :key="user.id">
          <UserCard :user="user" />
        </tr>
      </table>
    </div>
  </div>
</template>
  
<script>
import UserCard from '../components/User/UserCard.vue';
import axios from 'axios';
export default {
  name: 'ListUser',
  components: {
    UserCard,
  },
  data() {
    return {
      users: [],
      tableColumns: [
        "user",
        "gender",
        "Username",
        "CreatedAt",
        "actions",
      ],
    };
  },
  mounted() {
    axios.get('http://localhost:3000/users/get-users')
      .then(response => {
        console.log(response.data.users);
        this.users = response.data.users;
      })
      .catch(error => {
        console.log(error);
      });
  },
};
</script>
<style scoped>
.container {
  padding: 30px 0;
  margin: 0 auto;
}
</style>