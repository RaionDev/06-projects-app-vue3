<template>
  <dialog class="modal" :open="open">
    <div class="modal-box">
      <h3 class="text-lg font-bold">{{ title }}</h3>
      <p v-if="subtitle" class="py-4">
        {{ subtitle }}
      </p>
      <div class="flex flex-col modal-action">
        <form method="dialog" @submit.prevent="submitValue">
          <input :placeholder="placeholder ?? 'Ingrese un valor'" ref="inputRef"
            class="flex-1 w-full input input-bordered input-primary" v-model="inputValue" type="text" />
          <!-- if there is a button in form, it will close the modal -->
          <div class="flex justify-end mt-5">
            <button @click="$emit('close')" class="mr-4 btn">
              Close
            </button>
            <button type="submit" class="btn btn-primary">
              Aceptar
            </button>
          </div>
        </form>
      </div>
    </div>
  </dialog>

  <div v-if="open" class="fixed top-0 left-0 z-10 w-screen h-screen bg-black opacity-50 modal-backdrop"></div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

interface Props {
  open: boolean;
  placeholder?: string;
  title: string;
  subtitle?: string;
}

const props = defineProps<Props>();

const emits = defineEmits<{
  close: [void];
  value: [text: string];
}>();

const inputValue = ref('');
const inputRef = ref<HTMLInputElement | null>(null);

watch(props, ({ open }) => {
  if (open) {
    inputRef.value?.focus();
  }
})

const submitValue = () => {
  if (!inputValue.value) {
    inputRef.value?.focus();
    return;
  }

  emits('value', inputValue.value.trim());
  emits('close');

  inputValue.value = '';
};
</script>
