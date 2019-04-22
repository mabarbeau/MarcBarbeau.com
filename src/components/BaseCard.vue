<template>
  <article class="card">
    <div class="card-image-wrap">
      <img src="https://lorempixel.com/500/200/" alt="" class="card-image">
    </div>
    <div class="card-info">
      <div class="card-row">
        <h3 class="card-right subtitle">$1,000,000</h3>
        <h2 class="h5 card-left">
          <span class="ellipsis">
            {{ title }}
          </span>
        </h2>
      </div>
      <div class="card-row">
        <slot></slot>
      </div>
      <div class="card-footer text-right">
        <button type="button" name="button" class="btn btn--dense">
          <span class="btn__label">
            Foo
          </span>
        </button>
        <button type="button" name="button" class="btn btn--dense btn--raised">
          <i class="btn__icon material-icons">
            add
          </i>
          <span class="btn__label">
            Bar
          </span>
        </button>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'BaseCard',
  props: ['title', 'body'],
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
  /* background-color:  */
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
  /* border: 1px solid $border-color; */
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
