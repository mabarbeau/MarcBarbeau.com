<template>
  <div id="app">
    <TheHeader/>
    <router-view/>
    <TheFooter/>
  </div>
</template>

<script>

import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';

export default {
  name: 'app',
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>
<style>
#app{
  margin-top: 84px;
}
</style>
