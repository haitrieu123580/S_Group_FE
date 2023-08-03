<script setup>
import { useNotification } from "@kyvg/vue3-notification";

const { notify }  = useNotification()

const showNoti  =() =>{
    notify({
  title: "Authorization",
  text: "this is a noti!",
  type: 'warn '
});  
}
</script>
<template>
    <button @click="showNoti">Click me</button>
</template>
