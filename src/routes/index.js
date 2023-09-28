import Vue from 'vue'
import VueRouter from 'vue-router'

import Landingpage from "./components/Landingpage"
import About from "./components/About"
import Signup from "./components/Signup"
import Login from "./components/Login"


Vue.use(VueRouter)

const routes= [
    {
        path: '/',
        name: 'landingpage',
        component: Landingpage,
    }
    {
        path: 'about',
        name: 'about',
        component: About,
    }
    {
        path: 'signup',
        name: 'signup',
        component: Signup,
    }
    {
        path: 'login',
        name: 'login',
        component: Login,
    }
]