<template>
  <div relative class="bg-img-box" :style="styleObject">
    <slot></slot>
  </div>
</template>
<script lang='ts'>
import { defineComponent, PropType, ref } from 'vue'

export enum SIZE {
  auto = "auto",
  contain = "contain",
  cover = "cover"
}

export interface IBgProp {
  image: String
  bgSize: SIZE
}

export default defineComponent({
  name: 'BgImgBox',
  props: {
    image: String,
    size: {
      type: Object as PropType<SIZE>,
      default: SIZE.cover
    }
  },
  setup(props) {
    // init here
    const styleObject = ref({
      background: `url(${props.image})  center no-repeat`,
      "background-size": props.size,
    })
    return {
      styleObject
    }
  },
})
</script>
<style lang="scss" scoped>
</style>
