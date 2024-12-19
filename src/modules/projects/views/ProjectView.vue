<template>
  <h1 class="text-3xl">
    <BreadCrumbs :name="project?.name ?? 'No name'" />
  </h1>
</template>

<script setup lang="ts">
import BreadCrumbs from '@/modules/common/components/BreadCrumbs.vue';
import { useProjectsStore } from '../store/projects.store';
import { ref, watch } from 'vue';
import type { Project } from '../interfaces/project.interface';


interface Props {
  id: string
}

const props = defineProps<Props>();
const projectStore = useProjectsStore();

const project = ref<Project | null>();

// const project = projectStore.projectList.find(project => project.id === props.id)

watch(
  () => props.id,
  () => {
    project.value = projectStore.projectList.find(project => project.id === props.id)
  },
  {
    immediate: true,
  }
)

</script>
