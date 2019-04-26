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
          <a class="btn" href="/#">
            Home
          </a>
        </li>
        <li>
          <a class="btn" href="/#about">
            About
          </a>
        </li>
        <!-- <li>
          <a class="btn" href="/#work">
            Recent work
          </a>
        </li>
        <li>
          <a class="btn" href="/#contact">
            Contact
          </a>
        </li> -->
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
