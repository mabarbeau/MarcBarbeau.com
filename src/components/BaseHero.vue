<template>
  <section class="hero">
    <div class="foreground">
      <p class="h4">
        Hello, I am Marc. Front End Developer based in the Seattle area. <br>
        I am passionate about building eligant interfaces that are engaging and performant.
      </p>
      <div class="right">
        <img src="http://lorempixel.com/126/126/people/" alt="Marc Barbeau" width="126" height="126">
        <a class="btn">
          Learn more
        </a>
      </div>
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
    display: flex;
    align-items: flex-end;
    height: 100vh;
  }
  .foreground{
    background-color: white;
    width: 100%;
    padding: 20px 28px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
