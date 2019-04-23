import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import BaseCard from '@/components/BaseCard.vue';

describe('BaseCard.vue', () => {
  it('renders props.post.title when passed', () => {
    const post = {
      id: 1,
      title: 'Design system',
      subtitle: 'Webpack | Sass',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image_url: 'https://lorempixel.com/500/200/',
      image_alt: 'Alt',
      button_text: 'More',
      button_target: '/about',
    };
    const wrapper = shallowMount(BaseCard, {
      propsData: { post },
    });
    expect(wrapper.text()).to.include(post.title);
  });
});
