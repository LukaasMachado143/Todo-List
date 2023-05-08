<template>
  <div class="main-container">
    <TaskAddForm />
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
    };
  },
  methods:{
    async getTasks(){
      const req = await fetch('http://localhost:3000/taskList')
      const data = await req.json();
      console.log(data)
      this.taskArray = data
    }
  },
  mounted(){
    this.getTasks();
  }

};
</script>
