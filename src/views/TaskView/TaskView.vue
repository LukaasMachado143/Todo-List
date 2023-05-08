<template>
  <div class="main-container">
    <TaskAddForm />
    <v-list flat>
      <v-list-item-group multiple active-class="">
        <div v-for="(task, index) in taskArray" :key="index">
          <TaskC :taskData="task" />
        </div>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import TaskAddForm from "./components/TaskAddForm.vue";
import TaskC from "./components/TaskC.vue";
export default {
  name: "TaskView",
  components: {
    TaskC,
    TaskAddForm,
  },
  data() {
    return {
      taskArray: [
        {
          title: "Estudar Vue.js 0",
          description: "Aprendendo vue.js e vuetify",
          conclued: false,
        },
      ],
    };
  },
};
</script>
