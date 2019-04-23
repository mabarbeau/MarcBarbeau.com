<template>
  <form class="grid" action="#" method="post">
    <form class="grid__inner" action="" method="post">
      <div class="grid__cell--span-2">
        <label class="shown" for="firstname">First name</label>
        <input
          id="firstname"
          placeholder="First Name"
          class="form-control"
          name="firstname"
          type="text"
        >
      </div>
      <div class="grid__cell--span-2">
        <label for="firstname">Last name</label>
        <input
          id="firstname"
          placeholder="Last Name"
          class="form-control"
          name="lastname"
          type="text"
        >
      </div>
      <div class="grid__cell--span-2">
        <div class="select">
          <label class="shown" for="contact_method">Contact Method</label>
          <select class="form-control" name="cars" id="contact_method">
            <option value="phone">Phone</option>
            <option value="email">Email</option>
            <option value="linkedin">LinkedIn</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <div class="grid__cell--span-2">
        <label for="phone">Phone</label>
        <input
          id="phone"
          placeholder="Phone"
          class="form-control"
          name="lastname"
          type="text"
        >
      </div>
      <div class="grid__cell--span-6">
        <label class="shown" for="firstname">Textarea</label>
        <textarea class="form-control" placeholder="Textarea" name="message" rows="4"></textarea>
      </div>
      <button class="btn btn--unelevated" type="submit" name="button">
        <span class="btn__label">
          Submit
        </span>
      </button>
    </form>
  </form>
</template>

<script>
export default {
  name: 'TheContactForm',
};
</script>
