<template>
  <section class="hero">
    <div class="foreground grid">
      <h2 class="h3">
        Hello, I am Marc.
      </h2>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BaseHero',
};
</script>

<style lang="scss" scoped>
  .hero{
    background-image: url('../assets/hero-background.jpg');
    background-color: $gray;
    color: $white;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30rem;
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
</style>
