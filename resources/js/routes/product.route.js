export default [
    {
        path: '/products',
        name: 'Products',
        meta: {
            title: 'Product page',
            requireAuth: true,
        },
        component: () => import(/* webpackChunkName: "product-view" */'../views/product/Products.vue')
    },
    {
        path: '/product/tag',
        name: 'ProductTag',
        meta: {
            title: 'Product tag page',
            requireAuth: true
        },
        component: () => import(/* webpackChunkName: "product-tag-view" */'../views/product/Tag.vue')
    },
    {
        path: '/product/category',
        name: 'ProductCategory',
        meta: {
            title: 'Product category page',
            requireAuth: true,
        },
        component: () => import(/* webpackChunkName: "category-view" */'../views/product/Category.vue')
    },
]
