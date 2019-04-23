<template>
    <div class="grid">
        <div class="grid__inner">
            <div v-for="post in posts" :key="post.id" class="grid__cell">
                <BaseCard :post="post">
                  {{ post.body }}
                </BaseCard>
            </div>
        </div>
    </div>
</template>

<script>
import BaseCard from './BaseCard.vue';

export default {
  name: 'BaseCardList',
  components: { BaseCard },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: 'Design system',
          subtitle: 'Webpack | Sass',
          body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          image_url: 'https://lorempixel.com/500/200/',
          image_alt: 'Alt',
          button_text: 'More',
          button_target: '/about',
        },
        {
          id: 2,
          title: 'Blogging with Vue',
          subtitle: 'Vue | Sass',
          body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          image_url: 'https://lorempixel.com/500/200/',
          image_alt: 'Alt',
          button_text: 'More',
          button_target: '/about',
        },
        {
          id: 3,
          title: 'Why Vue is so fun',
          subtitle: 'Vue',
          body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          image_url: 'https://lorempixel.com/500/200/',
          image_alt: 'Alt',
          button_text: 'More',
          button_target: '/about',
        },
      ],
    };
  },
};

</script>
