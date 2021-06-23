<template>
  <div>
    <site-topbar-vue></site-topbar-vue>
    <site-header-vue></site-header-vue>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
import SiteHeaderVue from '@comp/SiteHeader/SiteHeader.vue';
import SiteTopbarVue from "@comp/SiteTopbar/SiteTopbar.vue"
export default defineComponent({
  name: 'NavHeader',
  props: {},
  components: {
    SiteHeaderVue,
    SiteTopbarVue
  },
  setup(props) {
    // init here
  },
})
</script>
<style lang="scss" scoped>
</style>
