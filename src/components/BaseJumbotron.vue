<template>
  <div class="jumbotron grid">
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
  </div>
</template>

<style lang="scss" scoped>
.jumbotron{
  margin-top: 5em;
  margin-bottom: 5em;
  padding-top: 0;
  padding-bottom: 0;
}

@media (min-width: 840px){
  .grid__cell--span-6{
    grid-column-start: 4;
  }
}
</style>
