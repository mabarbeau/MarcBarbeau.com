<template>
  <header class="grid">
    <h1 class="h4">
      Marc Barbeau
      <small class="subtitle">
        Front-End Developer
      </small>
    </h1>
    <nav>
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
        <!--
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
        -->
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
};
</script>


<style lang="scss" scoped>
header{
  padding-top: 10px;
  padding-bottom: 5px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h1{
  position: relative;
  left: -5px;
  display: inline-block;
  margin: 0;
  text-align: center;
}
small{
  border-top: 1px solid #555;
  padding-left: 8px;
  padding-right: 8px;
  display: block;
  text-transform: uppercase;
  color: #555;
}
ul{
  display: inline-block;
  list-style: none;
  text-align: center;
  margin: 0;
  padding: 0;
  li{
    display: inline-block;
  }
}
</style>
