<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app dark>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Lista de Tarefas
          </v-list-item-title>
          <v-list-item-subtitle>
            Essa é sua lista de tarefas
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="#fcb69f" dark src="https://picsum.photos/1920/1080?random" prominent>
      <template v-slot:img="{ props }">
        <v-img v-bind="props"></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>ToDo List</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: false,
    items: [
      { title: 'Tarefas', icon: 'mdi-view-dashboard', to: '/' },
      { title: 'Sobre', icon: 'mdi-help-box', to: '/about' },
    ],
  }),
  created() {
    document.title = "Lista de Tarefas Com VUE 3"
  }
};
</script>
