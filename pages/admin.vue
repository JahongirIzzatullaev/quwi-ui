<template>
  <div class="home">
    <h1 class="title">Projects List</h1>
    <div class="projects-section">
      <div class="project-item" v-for="project in projectsList">
        <div class="item-name">
          <div class="item-id">№ {{ project?.id }}</div>
          <img :src="project?.logo_url" :alt="project?.name" />
          {{ project?.name }}
        </div>
        <div class="item-active" :class="project?.is_active ? 'active' : ''">
          {{ getNameIsActive(project?.is_active) }}
        </div>
        <div
          class="item-has-started"
          :class="project?.has_starred ? 'active' : ''"
        >
          {{ getNameHasStarted(project?.has_starred) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Admin",
  layout: "admin",
  middleware: "guest",
  computed: {
    ...mapGetters(["projectsList"]),
  },
  methods: {
    ...mapActions({ getProjects: "getProjects" }),

    getNameIsActive(is_active) {
      return is_active ? "Активен" : "Не активен";
    },
    getNameHasStarted(has_started) {
      return has_started ? "В процессе" : "Открыт";
    },
  },
  mounted() {
    this.getProjects();
  },
};
</script>
