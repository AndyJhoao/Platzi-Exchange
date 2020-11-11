<template>
  <button
    @click="ButtonClick"
    class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-2 border border-green-500 hover:border-transparent rounded"
  >
    <beat-loader :loading="isLoading" :color="'#68d391'" :size="15" />
    <slot v-show="isLoading"></slot>
  </button>
</template>

<script>
export default {
  name: 'pxButton',
  methods: {
    ButtonClick() {
      this.$emit('click')
    }
  },
  props: {
    isLoading: {
      type: Boolean,
      default: false
    }
  }
}
</script>
