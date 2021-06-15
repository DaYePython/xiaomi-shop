<template>
  <c-row>
    <c-col span="8">span:8</c-col>
    <c-col span="8">span:8</c-col>
    <c-col span="8">
      <box-center>
        <span text-9xl>span:8</span>
      </box-center>
    </c-col>
  </c-row>
</template>

<script lang="ts" setup>
import BoxCenter from '@comp/BoxCenter/BoxCenter.vue'
import { getUser } from '@/api/index'
getUser()
</script>

<style lang="scss" scoped></style>
