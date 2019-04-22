<template>
    <footer>
      <a href="#">Source code</a>
      <p>
        Copyright (c) 2019 Copyright Holder All Rights Reserved.
      </p>
    </footer>
</template>

<script>
export default {
  name: 'TheFooter',
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
