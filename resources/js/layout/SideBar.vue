<template>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <!-- Brand Logo -->
        <router-link to="/dashboard" class="brand-link">
            <img src="/images/logo.png" alt="The Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
            <span class="brand-text font-weight-light">Laravel</span>
        </router-link>

        <!-- Sidebar -->
        <div class="sidebar">
        <!-- Sidebar user panel (optional) -->
            <router-link to="/profile">
                <div class="user-panel mt-3 pb-3 mb-3 d-flex align-items-center">
                    <div class="image">
                        <img src="/images/profile.png" class="img-circle elevation-2" alt="User Image">
                    </div>
                    <div class="info">
                        Bui Thanh Quan
                        <span class="d-block text-muted">
                        Admin
                        </span>
                    </div>
                </div>
            </router-link>

        <!-- Sidebar Menu -->
        <slot></slot>
        <!-- /.sidebar-menu -->
        </div>
        <!-- /.sidebar -->
    </aside>
</template>

<script>
export default {
    name: "Sidebar"
}
</script>

<style name="scss" scoped>
</style>
