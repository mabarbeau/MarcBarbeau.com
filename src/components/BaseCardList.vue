<template>
	<div class="grid">
		<div v-if="posts" class="grid__inner">
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
import axios from 'axios';

export default {
	name: 'BaseCardList',
	components: { BaseCard },
	data() {
		return {
			posts: [],
		};
	},
	created() {
		axios
			.get(`${this.$router.options.base}cards.json`)
			// eslint-disable-next-line
			.then(response => (this.posts = response.data));
		}
	};
</script>
