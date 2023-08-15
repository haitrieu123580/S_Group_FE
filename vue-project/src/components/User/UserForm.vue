<template>
  <div class="fixed left-0 top-0 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none">
    <div
      class="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]">
      <div
        class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
        <div
          class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
          <h5 class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
            {{ title }}
          </h5>
          <button type="button"
            class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
            aria-label="Close" @click="$emit('hideUserForm')">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form class="relative p-4 block w-full">
          <div class="form-group">

            <input v-if="user.username" type="text" v-model="username" :placeholder="user.username" class="">
            <input v-else type="text" v-model="username" placeholder="username">
          </div>
          <div class="form-group">
            <input v-if="user.email" type="email" v-model="email" :placeholder="user.email" class="">
            <input v-else type="email" v-model="email" placeholder="email">
          </div>
          <div class="form-group" style="flex-direction: row; justify-content: space-between; align-items: flex-start;">
            <label for="Male">Nam</label>
            <input type="radio" v-model="gender" value="true" id="Male">
            <label for="Female">Nữ</label>
            <input type="radio" v-model="gender" value="false" id="Female">
          </div>
          <div class="form-group">
            <input v-if="user.name" type="name" v-model="name" :placeholder="user.name" class="">
            <input v-else type="name" v-model="name" placeholder="name">
          </div>
          <div class="form-group">
            <input v-if="user.age" type="age" v-model="age" :placeholder="user.age" class="">
            <input v-else type="age" v-model="age" placeholder="age">
          </div>
          <div
            class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
            <button type="button"
              class="inline-block rounded bg-danger-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-danger-accent-100 focus:bg-danger-accent-100 focus:outline-none focus:ring-0 active:bg-danger-accent-200"
              @click="$emit('hideUserForm')">
              Close
            </button>
            <button type="button"
              class="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
              {{ title }}
            </button>
          </div>
        </form>


      </div>
    </div>
  </div>
</template>
  
<script setup>
import { ref } from 'vue';

const props = defineProps({
  user: Object,
  title: String,
});
</script>
  