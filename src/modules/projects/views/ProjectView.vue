<template>
  <div class="w-full">
    <section class="m-2">
      <BreadCrumbs :name="project?.name ?? 'No name'" />
    </section>

    <section class="m-2">
      <div class="overflow-x-auto">
        <table class="table">
          <!-- head -->
          <thead>
            <tr>
              <th class="w-14">Completada</th>
              <th>Tarea</th>
              <th>Completada en </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="task in project?.tasks" :key="task.id" class="hover">
              <th>
                <input
                  type="checkbox"
                  :checked = "!!task.completeAt"
                  class="checkobox checkbox-primary"
                  @change="projectStore.toogleTask(project?.id ?? '', task.id)"
                />
              </th>
              <td>{{ task.name }}</td>
              <td>{{ task.completeAt }}</td>
            </tr>
            <tr class="hover">
              <th></th>
              <td>

                <input
                  v-model="nameTask"
                  type="text"
                  class="input input-primary w-full opacity-60 transition-all hover:opacity-100 focus:opacity-100"
                  placeholder="Nueva tarea"
                  @keyup.enter="addTask"
                />
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import BreadCrumbs from '@/modules/common/components/BreadCrumbs.vue';
import { useProjectsStore } from '../store/projects.store';
import { ref, watch } from 'vue';
import type { Project } from '../interfaces/project.interface';
import { useRouter } from 'vue-router';


interface Props {
  id: string
}

const router = useRouter();
const props = defineProps<Props>();
const projectStore = useProjectsStore();

const project = ref<Project | null>();
const nameTask = ref<string>('')

// const project = projectStore.projectList.find(project => project.id === props.id)

const addTask = () => {
  if(!project.value) return;
  projectStore.addTaskToProject(nameTask.value, project.value?.id)
  nameTask.value = ''
}

watch(
  () => props.id,
  () => {
    project.value = projectStore.projectList.find(project => project.id === props.id)
    if(!project.value){
      router.replace('/')
    }
  },
  {
    immediate: true,
  }
)

</script>
