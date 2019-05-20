<template>
  <nav class="grid text-center">
    <ul>
      <li>
        <router-link to="/" class="btn">
          Home
        </router-link>
      </li>
      <li>
        <router-link to="/#about" class="btn">
          About
        </router-link>
      </li>
      <li>
        <router-link to="/#work" class="btn">
          Recent work
        </router-link>
      </li>
      <li>
        <router-link to="/#contact" class="btn">
          Contact
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'TheNav',
};
</script>

<style scoped>
ul{
  display: inline-block;
  list-style: none;
  text-align: center;
  margin: 0;
  padding: 0;
}
li{
  display: inline-block;
}
</style>
