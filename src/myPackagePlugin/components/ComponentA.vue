<template>
  <div> Componant A</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  console.log('ComponentA mounted');
})
</script>