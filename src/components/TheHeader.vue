<template>
  <header class="grid text-center">
    <h1 class="h4">
      Marc Barbeau
      <small class="subtitle">
        Front-End Developer
      </small>
    </h1>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
};
</script>

<style lang="scss" scoped>
header{
  border-bottom: 2px solid #ccc;
  padding-top: 10px;
  padding-bottom: 5px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h1{
  position: relative;
  left: -5px;
  display: inline-block;
  margin: 0 auto;
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
</style>
