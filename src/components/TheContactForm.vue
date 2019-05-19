<template>
  <div class="bg-gray">
    <form @submit.prevent="onSubmit" id="contact" class="grid bg-white">
      <h2>Let's Start a Conversation.</h2>
      <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li
            v-for="(error, index) in errors"
            :key="index"
            :title="'Error ' + (index + 1)"
          >
            {{ error.message }}
          </li>
        </ul>
      </p>
      <div class="grid__inner">
        <div class="grid__cell--span-8">
          <label class="shown" for="name">Name</label>
          <input
            id="name"
            placeholder="First Name"
            class="form-control"
            name="name"
            type="text"
            v-model="name"
          >
        </div>
        <div class="grid__cell--span-4">
          <label class="shown" for="contact_method">Email</label>
          <input
            id="email"
            placeholder="Email"
            class="form-control"
            name="email"
            type="text"
            v-model="email"
          >
        </div>
        <div class="grid__cell--span-12">
          <label class="shown" for="firstname">Textarea</label>
          <textarea
            class="form-control"
            placeholder="Textarea"
            name="message"
            rows="4"
            v-model="message"
          ></textarea>
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
import axios from 'axios';
import { load } from 'recaptcha-v3';

function writeMessage(name, email, message, token) {
  axios.post('https://us-central1-marcbarbeau.cloudfunctions.net/checkRecaptcha', {
    name,
    email,
    message,
    token,
  });
}

export default {
  name: 'TheContactForm',
  data() {
    return {
      errors: [],
      name: null,
      email: null,
      message: null,
      token: null,
    };
  },
  methods: {
    onSubmit(e) {
      this.errors = [];

      load('6LeCRKQUAAAAAGVLfnI6osDOX5O3TVIhHI31dkUM').then((recaptcha) => {
        recaptcha.execute().then((token) => {
          this.token = token;
        });
      }).catch(() => {
        this.errors.push({
          target: '[name=name]',
          message: 'Recaptcha failed.',
        });
      });

      if (!this.name) {
        this.errors.push({
          target: '[name=name]',
          message: 'Name required.',
        });
      }
      if (!this.email) {
        this.errors.push({
          target: '[name=email]',
          message: 'Email required.',
        });
      } else if (!this.validEmail(this.email)) {
        this.errors.push({
          target: '[name=email]',
          message: 'Valid email required.',
        });
      }

      if (!this.message) {
        this.errors.push({
          target: '[name=message]',
          message: 'Message required.',
        });
      }

      if (!this.errors.length) {
        writeMessage(this.name, this.email, this.message, this.token);
      } else {
        document.querySelector(this.errors[0].target).focus();
      }

      e.preventDefault();
    },
    validEmail(email) {
      // eslint-disable-next-line
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
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
