<template>
  <section class="hero">
    <div class="foreground grid">
      <h2 class="h3">
        Hello, I am Marc.
      </h2>
    </div>
    <div class="backdrop"></div>
  </section>
</template>

<script>
export default {
  name: 'BaseHero',
};
</script>

<style lang="scss" scoped>
  .hero{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 65vh;
  }
  .h3{
    margin-top: .5em;
    margin-bottom: 0;
  }
  .h4{
    margin: 0;
  }
  .h5{
    margin-top: 0;
  }
  .foreground{
    text-align: center;
  }
  .backdrop{
    z-index: -1;
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #ccc;
  }

</style>
