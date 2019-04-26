<template>
  <div class="about grid">
    <h1>{{ slug }}</h1>
    <a @click="$router.go(-1)" type="button" name="button" class="btn">
      <i class="btn__icon material-icons">
        arrow_back
      </i>
      <span class="btn__label">
        Back
      </span>
    </a>
  </div>
</template>
<script>
export default {
  name: 'about',
  props: ['slug'],
};
</script>
