import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '../components/Welcome'
import TodoList from '../components/todolist'
import Inputbox from '../components/inputbox'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '',
            component: Welcome
        },
        {
            path: '/todolist',
            component: TodoList
        },
        {
            path: '/input',
            component: Inputbox
        }
    ]
})

export default router;