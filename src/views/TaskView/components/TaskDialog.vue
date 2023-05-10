<template>
  <v-dialog
    transition="dialog-top-transition"
    max-width="600"
    v-model="showdialogLocal"
  >
    <template>
      <v-card>
        <v-toolbar color="primary" dark>Controle de Tarefas</v-toolbar>
        <v-card-text>
          <div class="text-line">
            <div class="title-task">Título:</div>
            <!-- <div class="description-task">{{ taskData.title }}</div> -->
          </div>
          <div class="text-line">
            <div class="title-task">Descrição:</div>
            <!-- <div class="description-task">{{ taskData.description }}</div> -->
          </div>
          <div class="text-line">
            <div class="title-task">Excluída com sucesso ...</div>
          </div>
        </v-card-text>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
export default {
  name: "TaskDialog",
  props: ["showDialog"],
  data(){
    return{
        showdialogLocal: true
    }
  },
  created(){
    setTimeout(() => this.showdialogLocal = false,3000)
  }
};
</script>

<style scoped>
.text-line {
  display: flex;
  justify-items: center;
  margin: 20px 0 20px;
}
.text-line .title-task {
  font-weight: bold;
  margin-right: 5px;
  font-size: 25px;
}
.text-line .description-task {
  font-size: 20px;
}
</style>