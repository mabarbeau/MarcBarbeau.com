<template>
  <section class="hero">
    <div class="foreground">
      <img src="../assets/MarcBarbeau.jpeg" alt="Marc Barbeau" width="268" height="268">
      <p>
        <span class="h3">
          Hello, I am Marc.
        </span>
        <span class="h4">
          Front End Developer based in the Seattle area.
        </span>
        <span class="h5">
          I am passionate about building eligant interfaces that are engaging and performant.
        </span>
      </p>
      <a class="btn" href="#about">
        Learn more
      </a>
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
  img{
    border-radius: 100%;
  }
  .hero{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 80px 0;
  }
  .h3{
    margin-top: .5em;
    margin-bottom: 0;
  }
  .h5{
    margin-top: 0;
    margin-bottom: .5em;
    letter-spacing: .08em;
    display: block;
  }
  .foreground{
    background-color: #fff;
    text-align: center;
    padding: 50px 60px 25px 60px;
    border: 1px solid #ddd;
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
