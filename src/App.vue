<template>
  <c-row>
    <c-col span="8">span:8</c-col>
    <c-col span="8">
      <bg-img-box image="https://picsum.photos/id/883/3000/2000" size="contain">span:8</bg-img-box>
    </c-col>
    <c-col span="8">
      <box-center>
        <span text-9xl>span:8</span>
      </box-center>
    </c-col>
  </c-row>
</template>

<script lang="ts" setup>
import BoxCenter from '@comp/BoxCenter/BoxCenter.vue'
import BgImgBox from "@comp/BgImgBox/BgImgBox.vue";
import { getUser } from '@/api/index'
getUser()
</script>

<style lang="scss" scoped></style>
