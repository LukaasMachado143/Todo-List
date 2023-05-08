<template>
<div class="main-container">
    
  <v-col cols="12" sm="6" align="center">
    <!-- Título da Atividade -->
    <v-text-field
      label="Informe o título da sua atividade..."
      outlined
      clearable
    ></v-text-field>

    <!-- Descrição da Atividade -->
    <v-text-field
      label="Informe a descrição da sua atividade..."
      outlined
      clearable
    ></v-text-field>

    <!-- botão para adicionar as tarefas -->
    <v-btn width="100%">Adicionar</v-btn>
  </v-col>
    
</div>
</template>

<script>
export default {
    name: 'TaskAddForm'
};
</script>

<style>
</style>