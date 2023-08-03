<template>
    <div></div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    mounted() {
        axios.post('http://localhost:3000/auth/login', {
        username: 'trieu',
        password: 'password'
      })
      .then((response) => console.log(response))

    }
  }
  </script>