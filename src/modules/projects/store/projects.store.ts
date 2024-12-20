import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { Project } from '../interfaces/project.interface';
import { v4 as uuid4 } from 'uuid';
import { useLocalStorage } from '@vueuse/core';

export const useProjectsStore = defineStore('projects', () => {
  const projects = ref(useLocalStorage<Project[]>('projects', []));

  const addProject = (name: string) => {
    if (name.length === 0) return;
    projects.value.push({
      id: uuid4(),
      name: name,
      tasks: [],
    });
  };

  const addTaskToProject = (taskName: string, id: string) => {
    if (taskName.trim().length === 0) return;
    const project = projects.value.find( project => project.id === id)
    if(!project) return;
    project?.tasks.push({
      id: uuid4(),
      name: taskName,
    })
  }

  const toogleTask = (projectId: string, taskId: string) => {
    const project = projects.value.find( project => project.id === projectId)
    if(!project) return;

    const task = project.tasks.find(t => t.id === taskId)
    if(!task) return;
    task.completeAt = task.completeAt ? undefined : new Date();
  }


  return {
    //Propperties
    projects,

    //Getters
    projectList: computed(() => [...projects.value]),
    noProjects: computed(() => projects.value.length === 0),
    projectsWithCompletion: computed(() => {
      return projects.value.map( p => {
        const total = p.tasks.length
        const completed = p.tasks.filter(t => t.completeAt).length
        const completion = total === 0 ? 0 : (completed / total) *100
        return{
        id: p.id,
        name: p.name,
        taskCount: total,
        completion: Math.round(completion)
        }
      })
    }),

    //Actions
    addProject,
    addTaskToProject,
    toogleTask,
  };
});
