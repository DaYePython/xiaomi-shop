<template>
  <div class="container" text-xs>
    <box-center class="box" container>
      <li v-for="nav in naves" :key="nav.id" :title="nav.title">
        <a :href="nav.link">{{ nav.title }}</a>
      </li>
      <li class="user" flex align-item-center>
        <!-- TODO router-link login and register -->
        <a href="#">登录</a>
        <a href="#">注册</a>
        <a href="javascript:;">消息通知</a>
        <topbar-cart></topbar-cart>
      </li>
    </box-center>
  </div>
</template>
<script lang='ts'>
import { defineComponent, ref, Ref } from 'vue'
import BoxCenter from '@comp/BoxCenter/BoxCenter.vue';
import TopbarCart from './TopbarCart.vue';
import { INavLink } from '@/types/data';

export default defineComponent({
  name: "SiteTopbar",
  props: {},
  setup(props) {
    const naves: Ref<INavLink[]> = ref([
      {

        id: "https://www.mi.com/index.html",
        title: "小米商城",
        link: "javascript: ;"
      },
      {

        id: "https://www.miui.com/",
        title: "MIUI",
        link: "javascript: ;"
      },
      {

        id: "https://www.ito.mi.com",
        title: "IOT",
        link: "javascript: ;"
      },

    ])
    return {
      naves
    }
  },
  components: { BoxCenter, TopbarCart },
})
</script>
<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 40px;
  background-color: $bg-fourth-color;
  color: $text-gray-color;

  .box {
    height: 100%;
    a:not(last-child)::after {
      content: "|";
      margin: 0 0.3em;
      color: #424242;
    }
    a:hover {
      color: $text-second-color;
    }
    .user {
      overflow: hidden;
      a {
        padding: 0 5px;
      }
      margin-left: auto;
    }
  }
}
</style>
