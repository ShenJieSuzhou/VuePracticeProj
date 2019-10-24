import Vue from 'vue';
import VueRouter from 'vue-router'
import routes from './router/router'
import App from './App.vue'

Vue.use(VueRouter);
const router = new VueRouter({
    routes
})

var vm = new Vue({
    el: '#app',
    router,
    render: h => {
        return h(App)
    }
});

