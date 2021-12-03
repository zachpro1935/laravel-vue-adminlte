<template>
    <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <li class="nav-item" v-for="(item, index) in listMenu" :key="index">
                <router-link :to="item.to" class="nav-link">
                    <span v-html="item.icon"></span>
                    <p>
                        {{ item.title }}
                    </p>
                </router-link>
            </li>

            <li class="nav-item">
                <span class="nav-link link-log-out" @click="logOut">
                    <i class="nav-icon fas fa-power-off red"></i>
                    <p>
                        Logout
                    </p>
                </span>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "Menu",
    data() {
        return {
            listMenu: [
                {
                    title: 'Dashboard',
                    icon: '<i class="nav-icon fas fa-tachometer-alt blue"></i>',
                    to: { name: 'Dashboard' }
                },
                {
                    title: 'Product',
                    icon: ' <i class="nav-icon fas fa-list orange"></i>',
                    to: { name: 'Products' }
                },
                {
                    title: 'Users',
                    icon: '<i class="fa fa-users nav-icon blue"></i>',
                    to: { name: 'Users' }
                },
                {
                    title: 'Category',
                    icon: '<i class="nav-icon fas fa-list-ol green"></i>',
                    to: { name: 'ProductCategory' }
                },
                {
                    title: 'ProductTag',
                    icon: '<i class="nav-icon fas fa-tags green"></i>',
                    to: { name: 'ProductTag' }
                },
                {
                    title: 'Developer',
                    icon: '<i class="nav-icon fas fa-cogs white"></i>',
                    to: { name: 'Developer' }
                }
            ]
        }
    },
    methods: {
        logOut() {
            // do something
            this.$store.commit('Auth/SET_AUTH', false);
            this.$router.push({ name: 'Login' })
        }
    }
}
</script>

<style lanng="scss" scoped>
.link-log-out {
    cursor: pointer;
    color: var(--textLink);
}
</style>
