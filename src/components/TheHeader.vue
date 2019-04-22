<template>
  <header>
    <nav>
      <h1 class="h4">
        Marc Barbeau
        <small>
          Front-End Developer
        </small>
      </h1>
      <ul>
        <li>
          <a class="btn" href="#">
            Home
          </a>
        </li>
        <li>
          <a class="btn" href="#about">
            About
          </a>
        </li>
        <li>
          <a class="btn" href="#work">
            Recent work
          </a>
        </li>
        <li>
          <a class="btn" href="#contact">
            Contact
          </a>
        </li>
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
  position: fixed;
  display: block;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: white;
}
h1{
  display: inline-block;
}

ul{
  list-style: none;
  text-align: center;
  margin-top: 10px;
  padding: 0;
  li{
    display: inline-block;
  }
}
</style>
