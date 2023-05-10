<template>
  <div>
    <v-list-item @click="ConluingTask(taskData.id)">
      <template v-slot:default="{}">
        <v-list-item-action>
          <v-checkbox :input-value="taskData.conclued"></v-checkbox>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ taskData.title }}</v-list-item-title>
          <v-list-item-subtitle>{{
            taskData.description
          }}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon @click.stop="DeleteTask(taskData.id)">
            <v-icon color="red darken-1">mdi-trash-can</v-icon>
          </v-btn>
        </v-list-item-action>
      </template>
    </v-list-item>
  </div>
</template>

<script>
export default {
  name: "TaskC",
  props: ["taskData"],
  methods: {
    async ConluingTask(id) {
      const data = { conclued: true };
      const dataJson = JSON.stringify(data);
      const req = await fetch(`http://localhost:3000/taskList/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: dataJson,
      });

      await req.json();
      this.$emit('UpdateView')
    },

    async DeleteTask(id) {
      const req = await fetch(`http://localhost:3000/taskList/${id}`, {
        method: "DELETE",
      });

      await req.json();
      this.$emit('UpdateView')
      this.$emit('runDialog', {title: this.taskData.title, description: this.taskData.description})
    },
  },
};
</script>

<style scoped>
</style>