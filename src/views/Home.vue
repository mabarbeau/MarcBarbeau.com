<template>
  <div class="home">
    <BaseHero/>
    <section id="about">
      <p class="h3">
        Hello, I am Marc. Front End Developer based in the greater Seattle Area. <br>
        I am passionate about building user interfaces that are appealing and engaging.
      </p>
    </section>
    <section id="work">
      <BaseCardList/>
    </section>
    <section id="contact">
      <TheContactForm/>
    </section>
    <TheFooter/>
  </div>
</template>

<script>

import BaseHero from '../components/BaseHero.vue';
import BaseCardList from '../components/BaseCardList.vue';
import TheContactForm from '../components/TheContactForm.vue';
import TheFooter from '../components/TheFooter.vue';

export default {
  name: 'home',
  components: {
    BaseHero,
    BaseCardList,
    TheContactForm,
    TheFooter,
  },
};
</script>
