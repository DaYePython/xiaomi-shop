<template>
  <div>
    <slot></slot>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'HelloWord',
  props: { },
  setup(props) {
    // init here
  },
})
</script>
<style lang="scss" scoped>
</style>
