<template>
  <div class="flex flex-col">
    <main>
      <top-menu />
      <router-view />
    </main>

  </div>
</template>

<script setup lang="ts">
import TopMenu from '@/modules/common/components/TopMenu.vue';


</script>

<style scoped></style>
