<template>
  <div class="bg-gray">
    <form class="grid bg-white" action="#" method="post">
      <h2>Let's Start a Conversation.</h2>
      <div class="grid__inner">
        <div class="grid__cell--span-8">
          <label class="shown" for="name">Name</label>
          <input
            id="name"
            placeholder="First Name"
            class="form-control"
            name="name"
            type="text"
          >
        </div>
        <div class="grid__cell--span-4">
          <label class="shown" for="contact_method">Email</label>
          <input
            id="email"
            placeholder="Email"
            class="form-control"
            name="lastname"
            type="text"
          >
        </div>
        <div class="grid__cell--span-12">
          <label class="shown" for="firstname">Textarea</label>
          <textarea class="form-control" placeholder="Textarea" name="message" rows="4"></textarea>
        </div>
        <div class="grid__cell--span-12 grid--align-right">
          <button class="btn btn--unelevated" type="submit" name="button">
            <span class="btn__label">
              Submit
            </span>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'TheContactForm',
};
</script>
<style scoped>
  .grid{
    max-width: 872px;
  }
  .bg-gray{
    padding-top: 5em;
    padding-bottom: 5em;
  }
</style>
