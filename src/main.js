import * as firebase from 'firebase/app';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './styles/main.scss';

require('firebase/firestore');

const firebaseConfig = {
  apiKey: 'AIzaSyBJAIhG3ofLm-qi_stNEIgAciIMjJ49Go0',
  authDomain: 'marcbarbeau.firebaseapp.com',
  databaseURL: 'https://marcbarbeau.firebaseio.com',
  projectId: 'marcbarbeau',
  storageBucket: 'marcbarbeau.appspot.com',
  messagingSenderId: '799811471396',
  appId: '1:799811471396:web:ade0822ca40564fe',
};
firebase.initializeApp(firebaseConfig);

window.db = firebase.firestore();

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
