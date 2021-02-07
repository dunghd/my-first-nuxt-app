<template>
  <h1>A single user, with ID: {{ $route.params.id }}</h1>
</template>

<script lang="ts">
export default {
  validate(data: any) {
    return /^\d+$/.test(data.params.id);
  },
  layout: "users",
};
</script>
