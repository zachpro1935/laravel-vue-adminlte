<template>
    <div class="wrapper">
        <!-- top nav -->
        <top-nav/>
        <!-- side bar -->
        <side-bar>
            <Menu />
        </side-bar>
        <!-- content-wrapper -->
        <content-wrapper>
            <router-view></router-view>
        </content-wrapper>
        <!-- footer -->
        <footer-app></footer-app>
    </div>
</template>

<script>
import Footer from './Footer';
import Menu from './Menu';
import TopNav from './TopNav';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
export default {
    name: 'MainLayout',
    components: {
        TopNav,
        SideBar,
        Menu,
        ContentWrapper,
        'footer-app': Footer
    }
}
</script>
