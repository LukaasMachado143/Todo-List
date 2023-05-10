<template>
  <div class="main-container">
    <v-col cols="12" sm="6" align="center">
      <!-- Título da Atividade -->
      <v-text-field
        v-model="title"
        label="Informe o título da sua atividade..."
        outlined
        clearable
      ></v-text-field>

      <!-- Descrição da Atividade -->
      <v-text-field
        v-model="description"
        label="Informe a descrição da sua atividade..."
        outlined
        clearable
      ></v-text-field>

      <!-- botão para adicionar as tarefas -->
      <v-btn color="indigo" dark @click="InsertTask">Adicionar</v-btn>
    </v-col>
  </div>
</template>

<script>
export default {
  name: "TaskAddForm",
  data() {
    return {
      title: null,
      description: null,
    };
  },
  methods: {
    async InsertTask() {
      const data = {
        title: this.title,
        description: this.description,
        conclued: false,
      };

      this.$emit('AddTaskInArray', data)

      // const dataJson = JSON.stringify(data);

      // const req = await fetch("http://localhost:3000/taskList", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: dataJson,
      // });

      // await req.json();
      // this.$emit("UpdateView");
      this.IssueDataDialog('create')
      this.ThisCloseFormAddTask();
    },

    ThisCloseFormAddTask() {
      this.title = null;
      this.description = null;
      this.$emit("closeFormAddTask");
    },

    IssueDataDialog(operationData){
      this.$emit('runDialog', {title: this.title, description: this.description, operation: operationData})
    }
  },
};
</script>

<style>
</style>