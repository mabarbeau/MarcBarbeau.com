<template>
  <div>
    <header class="heading">
      <h1 class="title">
        Marc Barbeau
        <small>
          Front End Developer
        </small>
      </h1>
    </header>
    <div class="hero">
      <img class="background" src="@/assets/images/Background.svg" />
    </div>
    <section class="page">
      <div class="moon__wrapper">
        <div class="moon">
          <h2 class="moon__content">
            Hello,
            <small>
              I'm Marc
            </small>
          </h2>
        </div>
      </div>
      <p>
        A creative Front-end developer specialising in engaging user experiences 
      </p>
      <ul>
        <li>HTML5</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Vue.js</li>
        <li>TypeScript</li>
        <li>Node.js</li>
        <li>Git</li>
        <li>Laravel</li>
        <li>PHP</li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend()
</script>

<style>
.moon__wrapper{
  position: fixed;
  display: block;
  margin: auto;
  width: 5em;
  top: 1em;
  left: 0;
  right: 0;
}
.moon{
  padding-top: 100%;
  border-radius: 100%;
  /* background-color: blue; */
  background-image: url("../assets/images/Moon.svg");
  background-size: cover;
}
.moon__content{
  width: 100%;
  text-align: center;
  position: absolute;
  top:50%;
  transform: translateY(-50%);
}

small{
  display: block;
  color: #555;
}


.background, .background, .heading{
  position: absolute;
}

.heading{
  border-bottom: 2px solid #ccc;
  padding-top: 10px;
  padding-bottom: 5px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
  background-color: rgba(200,200,200, 0.5);
  display: none;
  justify-content: space-between;
  align-items: center;
}

.heading h1{
  position: relative;
  left: -5px;
  display: inline-block;
  margin: 0 auto;
  text-align: center;
}

.heading small{
  border-top: 1px solid #555;
  padding-left: 8px;
  padding-right: 8px;
  display: block;
  text-transform: uppercase;
  color: #555;
}

.hero {
  background-color: red;
  position: relative;
  overflow: hidden;
  text-align: center;
  height: 320px;
}

@media screen and (min-width: 480px){
  .hero {
    height: 400px;
  }
}

@media screen and (min-width: 600px){
  .hero {
    height: 500px;
  }
}

@media screen and (min-width: 800px){
  .hero {
    height: 625px;
  }
}
@media screen and (min-width: 1000px){
}
  .hero {
    height: 56vw;
  }
  .background, .background{
    height: 101%;
  }

.page {
  text-align: center;
  height: 10000px;
  background: #b3ecfd;
  background-image: url("../assets/images/Water.svg");
  background: url("../assets/images/Water.svg"), linear-gradient(rgba(176,233,250,.5), rgba(2,0,36,.5));
  background-size: cover;
}

</style>
