<template>
  <div class="flex-col items-center">
    <pacman-loader :loading="isLoading" :color="'#68d391'" :size="100" />
    <px-assets-table v-if="!isLoading" :assets="assets" />
    <!-- <router-link to="/about" class="hover:underline flex from-purple-900 mt-10"
      >About</router-link
    > -->
  </div>
</template>

<script>
import api from '@/api'
import pxAssetsTable from '@/components/pxAssetsTable'
export default {
  name: 'Home',
  components: {
    pxAssetsTable
  },
  data() {
    return {
      isLoading: false,
      assets: []
    }
  },
  created() {
    this.isLoading = true
    api
      .getAssets()
      .then(assets => (this.assets = assets))
      .finally(() => (this.isLoading = false))
  }
}
</script>
