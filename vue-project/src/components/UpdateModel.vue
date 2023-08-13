<template>
    <div class="modal">
      <div class="modal-header">
        <h5 class="modal-title">Update User Information</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" v-model="user.name">
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" v-model="user.email">
          </div>
          <div class="form-group">
            <label for="phone">Phone</label>
            <input type="text" class="form-control" id="phone" v-model="user.phone">
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" @click="updateUser">Update</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      user: {
        type: Object,
        required: true,
      },
    },
  
    methods: {
      updateUser() {
        // Update the user information
        axios.put(`/users/${this.user.id}`, this.user)
          .then(response => {
            // The user information has been updated successfully
            this.$modal.hide('updateUser');
          })
          .catch(error => {
            // An error has occurred while updating the user information
            console.log(error);
          });
      },
    },
  };
  </script>
  
  <style scoped>
  .modal {
    position: relative;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    width: 300px;
    height: 150px;
    background-color: white;
    border: 1px solid black;
    padding: 10px;
  }
  
  .modal-header {
    margin-top: 0px;
  }
  
  .modal-title {
    font-weight: bold;
  }
  
  .modal-body {
    padding: 10px;
  }
  
  .modal-footer {
    margin-top: 10px;
  }
  
  .btn {
    margin-right: 5px;
  }
  </style>