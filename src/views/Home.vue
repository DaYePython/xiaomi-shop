<template>
    <nav-header></nav-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
</template>

<script setup lang="ts">
import NavHeader from "@comp/NavHeader/NavHeader.vue";
import NavFooter from "@comp/NavFooter/NavFooter.vue";

</script>