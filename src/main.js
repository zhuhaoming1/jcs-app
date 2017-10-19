// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'
import vueSwiper from 'vue-awesome-swiper'
import VueLazyLoad from 'vue-lazyload'
//import Scroll from 'better-scroll'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
Vue.use(VueLazyLoad,{
	loading: require('common/img/pic.jpg')
})
Vue.use(vueResource);
Vue.use(vueSwiper);
//Vue.use(Scroll);