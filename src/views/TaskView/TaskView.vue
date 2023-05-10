<template>
  <div class="main-container">
    <v-btn
      class="mx-3 mt-3 mb-3"
      fab
      dark
      color="indigo"
      small
      @click="toggleFormAddTask"
    >
      <v-icon dark> mdi-plus </v-icon>
    </v-btn>
    <hr />
    <TaskAddForm
      v-show="showFormAddTask"
      @closeFormAddTask="toggleFormAddTask"
      @UpdateView="UpdateView"
    />
    <v-list flat>
      <v-list-item-group multiple active-class="">
        <div v-for="task in taskArray" :key="task.id">
          <TaskC :taskData="task" @UpdateView="UpdateView" @runDialog="runDialog"/>
        </div>
      </v-list-item-group>
    </v-list>
    <TaskDialog :showDialog="showDialog" :title="titleDialog" :description="descriptionDialog"/>
  </div>
</template>

<script>
import TaskAddForm from "./components/TaskAddForm.vue";
import TaskC from "./components/TaskC.vue";
import TaskDialog from './components/TaskDialog.vue';
export default {
  name: "TaskView",
  components: {
    TaskC,
    TaskAddForm,
    TaskDialog,
  },
  data() {
    return {
      taskArray: null,
      showFormAddTask: false,
      showDialog: false,
      titleDialog: null,
      descriptionDialog: null
    };
  },
  methods: {
    toggleFormAddTask() {
      this.showFormAddTask = !this.showFormAddTask;
    },
    async getTasks() {
      const req = await fetch("http://localhost:3000/taskList");
      const data = await req.json();
      this.taskArray = data;
    },

    async UpdateView(){
      this.getTasks();
    },

    runDialog(data){
      this.showDialog = true
      this.titleDialog = data.title
      this.descriptionDialog = data.description
      setTimeout(() => this.showDialog = false,3000)
    }
  },
  mounted(){
    this.getTasks();
  }
};
</script>
