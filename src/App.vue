<template>
  <div id="app">
    <TheHeader/>
    <router-view/>
  </div>
</template>

<script>

import TheHeader from './components/TheHeader.vue';

export default {
  name: 'app',
  components: {
    TheHeader,
  },
};
</script>
<style>
#app{
  margin-top: 84px;
}
</style>
