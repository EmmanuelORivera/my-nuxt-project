<template>
  <div class="bg-green-500 rounded px-2 py-1 text-white">
    this is an alert component. {{ $sayHello('World') }}
  </div>
  <input type="text" v-focus />
</template>
<script setup>
const { $sayHello } = useNuxtApp()
console.log($sayHello('World2'))
</script>
