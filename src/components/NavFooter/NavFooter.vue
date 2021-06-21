<template>
  <div>
    <slot></slot>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'NavFooter',
  props: { },
  setup(props) {
    // init here
  },
})
</script>
<style lang="scss" scoped>
</style>
