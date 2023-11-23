<template>
  <div>
    <v-list-item @click="ConluingTask">
      <template v-slot:default="{ }">
        <v-list-item-action>
          <v-checkbox :input-value="taskData.isConclued"></v-checkbox>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ taskData.title }}</v-list-item-title>
          <v-list-item-subtitle>{{
            taskData.description
          }}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon @click.stop="DeleteTask">
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
    ConluingTask() {
      if (this.taskData.isConclued) return
      this.$emit('ConcludeTask', this.taskData.id)
      this.IssueDataDialog('conclude')
    },

    DeleteTask() {
      this.$emit('DeleteTask', this.taskData.id)
      this.IssueDataDialog('delete')
    },

    IssueDataDialog(operationData) {
      this.$emit('runDialog', { title: this.taskData.title, description: this.taskData.description, operation: operationData })
    }
  },
};
</script>

<style scoped></style>