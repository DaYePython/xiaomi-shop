<template>
  <div class="box-center" :class="classObject">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { Ref, ref, defineComponent } from 'vue'

export interface IBoxCenter {
  justify: Boolean
  align: Boolean
}
export interface IBoxCenterClass {
  'flex': Boolean
  'justify-center': Boolean
  'align-center': Boolean
}
export default defineComponent({
  name: 'BoxCenter',
  props: {
    justify: {
      type: Boolean,
      default: true,
    },
    align: {
      type: Boolean,
    },
  },
  setup(props) {
    // init here
    const classObject: Ref<IBoxCenterClass> = ref({
      'flex': props.justify || props.align,
      'justify-center': props.justify,
      'align-center': props.align,
    })
    return {
      classObject,
    }
  },
})
</script>
<style lang="scss" scoped>
.flex {
  display: flex;
}
.justify-center {
  justify-content: center;
}
.align-center {
  align-items: center;
}
</style>
