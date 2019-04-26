<template>
  <div class="home">
    <BaseHero/>
    <section id="about" class="grid">
        <h2>About</h2>
        <article>
            <h3>Timeline</h3>
            <dl class="timeline">
              <dt>
                First line of code
              </dt>
              <dd>2012</dd>
              <dt>
                First Website
              </dt>
              <dd>2013</dd>
              <dt>
                Graduated
              </dt>
              <dd>2013</dd>
              <dt>
                First Professinal Web Develoment Role
              </dt>
              <dd>2015</dd>
            </dl>
        </article>
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

<style scoped>
  dl{
    display: block;
  }
  dt{
    display: inline-block;
  }
  dd{
    display: inline-block;

  }
</style>
