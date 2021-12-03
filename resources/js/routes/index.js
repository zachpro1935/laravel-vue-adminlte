import VueRouter from "vue-router";
import Vue from 'vue';
import ProductRoute from './product.route';
import AuthRoute from './auth.route';
import Store from '../stores'

Vue.use(VueRouter);

const routes = [
    {
        path: '*',
        component: () => import(/* webpackChunkName: "main-layout" */'../layout/Main.vue'),
        redirect: { name: 'Dashboard' },
        children: [
            {
                path: '/dashboard',
                name: 'Dashboard',
                meta: {
                    title: 'Dashboard page',
                    requireAuth: true
                },
                component: () => import(/* webpackChunkName: "dashboard-view" */'../views/Dashboard.vue')
            },
            {
                path: '/profile',
                name: 'Profile',
                meta: {
                    title: 'Profile page',
                    requireAuth: true
                },
                component: () => import(/* webpackChunkName: "profile-view" */'../views/Profile.vue')
            },
            {
                path: '/developer',
                name: 'Developer',
                meta: {
                    title: 'Developer page',
                    requireAuth: true
                },
                component: () => import(/* webpackChunkName: "developer-view" */'../views/Developer.vue')
            },
            {
                path: '/users',
                name: 'Users',
                meta: {
                    title: 'User page',
                    requireAuth: true
                },
                component: () => import(/* webpackChunkName: "user-view" */'../views/Users.vue')
            },
            ...ProductRoute
        ]
    },
    ...AuthRoute
    // {
    //     path: '*',
    //     component: () => import(/* webpackChunkName: "not-found-view" */'../views/NotFound')
    // }
];

const router = new VueRouter({
    mode: "history",
    routes,
});

// before loading route
router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? to.meta.title : '';
  next();
});

router.beforeEach(async (to, from, next) => {
  const isAuth = Store.state.Auth.isAuth;

  if (to.matched.some((res) => res.meta.requireAuth)) {
    console.log(to.name, isAuth)
    if (isAuth) {
        next();
    } else {
        next({ name: 'Login' });
    }
  } else {
    next();
  }
})


export default router;
