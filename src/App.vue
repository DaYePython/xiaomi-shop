<template>
  <router-view />
</template>

<script lang="ts" setup>
import { getUser } from '@/api/index'
getUser()
</script>

<style lang="scss" scoped></style>
