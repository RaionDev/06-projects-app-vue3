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

  <input-modal
  title="Nuevo proyecto"
    subtitle="Dale un nombre único a tu proyecto"
    placeholder="Ingrese el nombre del proyecto"
    :open="modalOpen" @close="modalOpen = false" @value="onNewValue"
  />

  <CustomModal :open="customModalOpen">
    <template #header>
      <h1 class="text-3xl">Titulo del modal</h1>
    </template>
    <template #body>
      <p>Voluptate laboris elit sunt voluptate enim in est id do aute eiusmod.</p>
    </template>

    <template #footer>
      <div class="flex justify-end">
        <button @click="customModalOpen=false" class="btn mr-4">Close</button>
        <button @click="customModalOpen=false" class="btn btn-primary">Aceptar</button>
      </div>
    </template>
  </CustomModal>

  <fab-button @click="modalOpen = true">
    <AddCircle />
  </fab-button>

  <fab-button @click="customModalOpen = true" position="bottom-left">
    <ModalIcon />
  </fab-button>
</template>

<script setup lang="ts">
import CustomModal from '@/modules/common/components/CustomModal.vue';
import FabButton from '@/modules/common/components/FabButton.vue';
import InputModal from '@/modules/common/components/InputModal.vue';
import AddCircle from '@/modules/common/icons/AddCircle.vue';
import ModalIcon from '@/modules/common/icons/ModalIcon.vue';
import { ref } from 'vue';

const modalOpen = ref(false);
const customModalOpen = ref(false);

const onNewValue = (projectName: string) => {
  console.log({ projectName })
}
</script>
