<template>
  <c-row>
    <c-col span="8">span:8</c-col>
    <c-col span="8">span:8</c-col>
    <c-col span="8">
      <p text-gray-800>span:8</p>
    </c-col>
  </c-row>
</template>

<script lang="ts" setup>
import { getUser } from "./api/index.ts";
getUser()
</script>

<style lang="scss" scoped>
</style>
