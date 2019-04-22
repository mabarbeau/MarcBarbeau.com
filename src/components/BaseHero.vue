<template>
  <section class="hero">
    <div class="foreground"></div>
    <div class="backdrop"></div>
  </section>
</template>

<script>
export default {
  name: 'BaseHero',
};
</script>

<style lang="scss" scoped>
  .backdrop{
    z-index: -1;
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .foreground{
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    z-index: 1;
    height: 100vh;
    margin: 0;
    padding: 0;
    header{
      position: relative;
      width: auto;
    }
  }
  hr{
    margin: 0;
    border: 0;
    height: 2px;
  }
  .social{
    list-style: none;
    display: flex;
    margin: 28px 0;
    justify-content: space-around;
    li{
      font-size: 36px;
      display: inline-flex;
    }
  }
</style>
