<template>
  <div class="flex-col items-center">
    <px-assets-table :assets="assets" />
    <router-link to="/about" class="hover:underline flex from-purple-900 mt-10"
      >About</router-link
    >
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
      assets: []
    }
  },
  created() {
    api.getAssets().then(assets => (this.assets = assets))
  }
}
</script>
