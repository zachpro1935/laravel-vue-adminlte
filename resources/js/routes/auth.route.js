export default [
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: 'Login page',
            requireAuth: false,
        },
        component: () => import(/* webpackChunkName: "login-view" */'../views/auth/Login.vue')
    },

];
