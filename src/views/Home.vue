<template>
  <div class="home">

    <BaseHero/>

    <section id="about" class="grid">
        <div class="grid__inner">
          <div class="grid__cell--span-6">
            <h2>My Story</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <article>
           <h3>Skills</h3>
          <div class="grid__inner">
            <div class="grid__cell">
              <h4>
                Industry Knowledge
              </h4>
              <ul>
                <li>Web Development</li>
                <li>Web Applications</li>
                <li>Front-end Development</li>
                <li>Web Design</li>
                <li>Software Development</li>
                <li>Software Testing</li>
              </ul>
            </div>
            <div class="grid__cell">
              <h4>
                Tools &amp; Technologies
              </h4>
              <ul>
                <li>PHP</li>
                <li>SQL</li>
                <li>Git</li>
                <li>AJAX</li>
                <li>jQuery</li>
                <li>Node.js</li>
                <li>WordPress</li>
                <li>Webpack</li>
                <li>Vue.js</li>
                <li>Laravel</li>
              </ul>
            </div>
            <div class="grid__cell">
              <h4>
                Interpersonal Skills
              </h4>
              <ul>
                <li>Time Management</li>
                <li>Teamwork</li>
                <li>Written Communication</li>
              </ul>
              <h4>
                Other Skills
              </h4>
              <ul>
                <li>Progressive Enhancement</li>
                <li>Automated Software Testing</li>
                <li>Grunt (Software)</li>
                <li>Gulp.js</li>
              </ul>
            </div>
          </div>
        </article>

        <BaseTimeline/>
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
import BaseTimeline from '../components/BaseTimeline.vue';
import TheContactForm from '../components/TheContactForm.vue';
import TheFooter from '../components/TheFooter.vue';

export default {
  name: 'home',
  components: {
    BaseHero,
    BaseCardList,
    BaseTimeline,
    TheContactForm,
    TheFooter,
  },
};
</script>

<style scoped>
  dl{
    display: block;
  }
  dt{
    display: block;
  }
  dd{
    display: block;

  }
</style>
