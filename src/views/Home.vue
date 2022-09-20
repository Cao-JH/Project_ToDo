<template>
    <div class="homePage">
        <Header />
        <div class="homeContainer">
            <Projects />
        </div>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import Projects from '../components/Projects.vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

</script>

<style lang="less" scoped>
.homePage {
    display: flex;
    flex-direction: column;
    background-color: #FFFCF2;

    .homeContainer {
        // border: 1px solid #000;
        height: calc(100vh - 170px);
        margin: 0 34px;
    }


}
</style>