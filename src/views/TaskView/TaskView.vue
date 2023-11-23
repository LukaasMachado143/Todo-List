<template>
  <div class="main-container">
    <v-btn class="mx-3 mt-3 mb-3" fab dark color="indigo" small @click="toggleFormAddTask">
      <v-icon dark> mdi-plus </v-icon>
    </v-btn>
    <hr />
    <TaskAddForm v-show="showFormAddTask" @AddTaskInArray="AddTaskInArray" @closeFormAddTask="toggleFormAddTask"
      @runDialog="runDialog" />
    <v-list flat>
      <v-list-item-group multiple active-class="">
        <div v-for="(task) in taskArray" :key="task.id">
          <TaskC :taskData="task" @runDialog="runDialog" @DeleteTask="DeleteTask" @ConcludeTask="ConcludeTask" />
        </div>
      </v-list-item-group>
    </v-list>
    <TaskDialog :showDialog="showDialog" :title="titleDialog" :description="descriptionDialog" :action="actionDialog" />
  </div>
</template>

<script>
import TaskAddForm from "./components/TaskAddForm.vue";
import TaskC from "./components/TaskC.vue";
import TaskDialog from "./components/TaskDialog.vue";
import Service from '@/backend/service'
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
      service: new Service(),
      showFormAddTask: false,
      showDialog: false,
      titleDialog: null,
      descriptionDialog: null,
      actionDialog: null,
    };
  },
  methods: {
    AddTaskInArray(data) {
      this.service.create(data).then((res) => {
        if (res.status == 201) this.getTasks()
      }).catch((error) => {
        console.log(error)
      })
    },
    DeleteTask(id) {
      this.service.delete(id).then((res) => {
        if (res.data.success == true) this.getTasks()
      }).catch((error) => {
        console.log(error)
      })
    },
    ConcludeTask(id) {
      this.service.update(id, { isConclued: true }).then((res) => {
        if (res.data.success == true) this.getTasks()
      }).catch((error) => {
        console.log(error)
      })
    },
    toggleFormAddTask() {
      this.showFormAddTask = !this.showFormAddTask;
    },
    getTasks() {
      this.taskArray = []
      this.service.getAll().then((res) => {
        if (res.data.success == true) this.taskArray = res.data.data
      }).catch((error) => {
        console.log(error)
      })
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
  mounted() {
    this.getTasks();
  }
};
</script>

