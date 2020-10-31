<template>
  <main>
    <pxHeader></pxHeader>
  </main>
</template>

<script>
import pxHeader from "@/components/pxHeader";
export default {
  name: "App",
  components: {
    pxHeader
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
