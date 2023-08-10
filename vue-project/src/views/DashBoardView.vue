<template>
    <Navbar />
    <Sidebar />
    <ListUserView/>
  </template>
  
  <script setup>
    import Navbar from '../components/Dashboard/Navbar.vue';
    import Sidebar from '../components/Dashboard/Sidebar.vue';
    import ListUserView from './ListUserView.vue';
  </script>