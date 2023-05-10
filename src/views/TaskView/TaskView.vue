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
      @AddTaskInArray="AddTaskInArray"
      @closeFormAddTask="toggleFormAddTask"
      @UpdateView="UpdateView"
      @runDialog="runDialog"
    />
    <v-list flat>
      <v-list-item-group multiple active-class="">
        <div v-for="(task, index) in taskArray" :key="index">
          <TaskC
            :taskData="task"
            @UpdateView="UpdateView"
            @runDialog="runDialog"
            @DeleteTask="DeleteTask"
            @ConcludeTask="ConcludeTask"
          />
        </div>
      </v-list-item-group>
    </v-list>
    <TaskDialog
      :showDialog="showDialog"
      :title="titleDialog"
      :description="descriptionDialog"
      :action="actionDialog"
    />
  </div>
</template>

<script>
import TaskAddForm from "./components/TaskAddForm.vue";
import TaskC from "./components/TaskC.vue";
import TaskDialog from "./components/TaskDialog.vue";
export default {
  name: "TaskView",
  components: {
    TaskC,
    TaskAddForm,
    TaskDialog,
  },
  data() {
    return {
      taskArray: [],
      showFormAddTask: false,
      showDialog: false,
      titleDialog: null,
      descriptionDialog: null,
      actionDialog: null,
    };
  },
  methods: {
    AddTaskInArray(data) {
      this.taskArray.push(data);
    },
    DeleteTask(data){
      const index = this.taskArray.findIndex(obj => obj === data);
      this.taskArray.splice(index, 1)
    },
    ConcludeTask(data){
      const index = this.taskArray.findIndex(objeto => objeto == data);
      this.taskArray[index].conclued = true;
    },
    toggleFormAddTask() {
      this.showFormAddTask = !this.showFormAddTask;
    },
    async getTasks() {
      const req = await fetch("http://localhost:3000/taskList");
      const data = await req.json();
      this.taskArray = data;
    },

    async UpdateView() {
      this.getTasks();
    },

    runDialog(data) {
      this.showDialog = true;
      this.titleDialog = data.title;
      this.descriptionDialog = data.description;
      if (data.operation == "delete") {
        this.actionDialog = "Excluída com sucesso ...";
      }
      if (data.operation == "conclude") {
        this.actionDialog = "Concluída com sucesso ...";
      }
      if (data.operation == "create") {
        this.actionDialog = "Criada com sucesso ...";
      }
      setTimeout(() => (this.showDialog = false), 3000);
    },
  },
  // mounted(){
  //   this.getTasks();
  // }
};
</script>
