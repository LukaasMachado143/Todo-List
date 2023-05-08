<template>
  <div class="main-container">
    <v-btn
      class="mx-3 mt-3"
      fab
      dark
      color="indigo"
      small
      @click="toggleFormAddTask"
    >
      <v-icon dark> mdi-plus </v-icon>
    </v-btn>
    <TaskAddForm v-show="showFormAddTask" />
    <v-list flat>
      <v-list-item-group multiple active-class="">
        <div v-for="task in taskArray" :key="task.id">
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
      taskArray: null,
      showFormAddTask: false,
    };
  },
  methods: {
    toggleFormAddTask() {
      this.showFormAddTask = !this.showFormAddTask
    },
    async getTasks() {
      const req = await fetch("http://localhost:3000/taskList");
      const data = await req.json();
      console.log(data);
      this.taskArray = data;
    },
  },
  mounted() {
    this.getTasks();
  },
};
</script>
