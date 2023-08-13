<template>
  <div class="flex flex-col h-screen bg-gray-100">
    <Navbar />
    <div class="flex-1 flex flex-wrap">
    
    <Sidebar />
    <div class="flex-1 p-4 w-full md:w-1/2">
      <ListUserView />

    </div>
  </div>
  </div>

</template>
  
<script setup>
import Navbar from '../components/Dashboard/Navbar.vue';
import Sidebar from '../components/Dashboard/Sidebar.vue';
import ListUserView from './ListUserView.vue';
</script>
