<template>
  <div id="app">
    <page-header></page-header>
    <router-view />
  </div>
</template>

<script>
  import pageHeader from '@/components/header/header'
  export default {
    components: {
      pageHeader
    },
    name: "App"
  };

</script>

<style>
  @import '../src/assets/css/flex.css';
</style>
