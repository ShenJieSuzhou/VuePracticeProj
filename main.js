import Vue from 'vue';
import App from './app.vue';

/* <template id='tmp'>
    <div>
        <h1>11111111111</h1>
    </div>
</template>

var login = {
    template: '#tmp',
} */

// Vue.use(VueRouter);
// const router = new VueRouter({
//     routes
// })

var vm = new Vue({
    el: '#app',
    render: h => h(App)
});

