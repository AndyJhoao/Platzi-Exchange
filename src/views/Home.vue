<template>
  <div class="flex-col items-center">
    <px-assets-table />
    <router-link to="/about" class="hover:underline flex from-purple-900 mt-10"
      >About</router-link
    >
  </div>
</template>

<script>
import pxAssetsTable from "@/components/pxAssetsTable";
export default {
  name: "Home",
  components: {
    pxAssetsTable,
  },
};
</script>
