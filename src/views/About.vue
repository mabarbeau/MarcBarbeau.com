<template>
  <div class="about grid">
    <a @click="$router.go(-1)" type="button" name="button" class="btn">
      <i class="btn__icon material-icons">
        arrow_back
      </i>
      <span class="btn__label">
        Back
      </span>
    </a>
    <div v-html="compiledMarkdown"></div>
  </div>
</template>
<script>

import marked from 'marked';
import axios from 'axios';

export default {
  name: 'about',
  props: ['slug'],
  data() {
    return {
      input: '',
    };
  },
  mounted() {
    axios
      .get(`${this.$router.options.base}markdown/${this.slug}.md`)
      // eslint-disable-next-line
      .then(response => (this.input = response.data));
  },
  computed: {
    compiledMarkdown() {
      return marked(this.input, { sanitize: true });
    },
  },
};
</script>
