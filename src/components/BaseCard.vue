<template>
  <article class="card">
    <div v-if="post.image_url && post.image_alt" class="card-image-wrap">
      <img :src="post.image_url" :alt="post.image_alt" class="card-image">
    </div>
    <div class="card-info">
      <div class="card-row">
        <h3 v-if="post.subtitle" class="card-right subtitle">{{ post.subtitle }}</h3>
        <h2 v-if="post.title" class="h5 card-left">
          <span class="ellipsis">
            {{ post.title }}
          </span>
        </h2>
      </div>
      <div class="card-row">
        <slot></slot>
      </div>
      <div v-if="post.button_target && post.button_text" class="card-footer text-right">
        <router-link :to="post.button_target" type="button" name="button" class="btn btn--dense">
          <i class="btn__icon material-icons">
            add
          </i>
          <span class="btn__label">
            {{ post.button_text }}
          </span>
        </router-link>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'BaseCard',
  props: ['post'],
};
</script>

<style lang="scss">
.card{
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  margin: auto;
  p{
    margin: 0;
  }
}
.card-image{
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: none;
  max-width: none;
  min-height: 100%;
  min-width: 100%;
  position: absolute;
  background-color: #444;
}
.card-image-wrap{
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 75%;
}
.card-info{
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding: 10px;
  border: 1px solid #ccc;
}
.card-footer{
  margin-top: auto;
}
.card-row{
  margin-bottom: 10px;
}
.ellipsis{
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
  overflow: hidden;
  display: block;
}
.card-right{
  float: right;
}
.card-left,
.card-right{
  margin: 0;
}
</style>
