import VueRouter from "vue-router"
import Home from '../pages/Home';
import Note from '../pages/Note';

const routes = [
    { path: '/', component: Home},
    { name: "note",  path: '/note', component: Note}
]

export const router = new VueRouter({
    routes
})