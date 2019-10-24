import App from '../App.vue'
import home from '../page/home/home.vue'
import item from '../page/item/item.vue'
import score from '../page/score/score.vue'


export default[{
    path: '/',
    component: App,
    children: [
        {
            path: '',
            component: home
        },
        {
            path: '/item',
            component: item
        },
        {
            path: '/score',
            component: score
        }
    ]
}]