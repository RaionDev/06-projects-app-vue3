<template>
  <div class="overflow-x-auto w-full">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Proyecto</th>
          <th>Tareas</th>
          <th>Avance</th>
        </tr>
      </thead>
      <tbody>
        <tr class="hover">
          <th>2</th>
          <td>Hart Hagerty</td>
          <td>Desktop Support Technician</td>
          <td>Purple</td>
        </tr>
      </tbody>
    </table>



  </div>

  <input-modal title="Nuevo proyecto" subtitle="Dale un nombre único a tu proyecto"
    placeholder="Ingrese el nombre del proyecto" :open="modalOpen" @close="modalOpen = false" @value="onNewValue" />

  <fab-button @click="modalOpen = true">
    <AddCircle />
  </fab-button>
</template>

<script setup lang="ts">
import FabButton from '@/modules/common/components/FabButton.vue';
import InputModal from '@/modules/common/components/InputModal.vue';
import AddCircle from '@/modules/common/icons/AddCircle.vue';
import { ref } from 'vue';

const modalOpen = ref(false);
const onNewValue = (projectName: string) => {
  console.log({ projectName })
}
</script>
