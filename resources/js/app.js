/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import App from './App.vue';
import Vue from 'vue';
import router from './routes';
import store from './stores'
import VueProgressBar from 'vue-progressbar'
import Swal from 'sweetalert2';
import { Form, HasError, AlertError } from 'vform';
window.Form = Form;

import Gate from "./Gate";
Vue.prototype.$gate = new Gate(window.user);

window.Vue = Vue;
window.router = router;

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
window.Swal = Swal;
window.Toast = Toast;

Vue.component('pagination', require('laravel-vue-pagination'));


// Filter Section

Vue.filter('formatDate',function(created){
    return moment(created).format('MMMM Do YYYY');
});

Vue.filter('yesno', value => (value ? '<i class="fas fa-check green"></i>' : '<i class="fas fa-times red"></i>'));

Vue.use(VueProgressBar, {
    color: 'rgb(143, 255, 199)',
    failedColor: 'red',
    height: '3px'
  });

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app-main');
