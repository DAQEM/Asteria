<template>
  <div></div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";

const route = useRoute();

console.log(route.params.id);
</script>

<style></style>
