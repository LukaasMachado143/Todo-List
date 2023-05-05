<template>
  <v-list
      flat
    >
      <v-list-item-group
        v-model="settings"
        multiple
        active-class=""
      >
        <TaskC taskName="Criar componente de Tarefas" taskDescription="Componente de tarefas criando no estilo de checkbox list"/>
      </v-list-item-group>
    </v-list>
</template>

<script>
  import TaskC from '../../components/TaskC.vue'
  export default {
    name: 'TaskView',

    components: {
      TaskC
    },
  }
</script>
