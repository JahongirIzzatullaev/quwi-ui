<template>
  <div class="notification is-danger">
    Error: {{ getValue(message) }}
  </div>
</template>

<script>
export default {
  name: "Notification",
  props: ["message"],
  methods: {
    getValue(str) {
      return Object.values(str)[0];
    },
  },
};
</script>
