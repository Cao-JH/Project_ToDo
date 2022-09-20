<template>
    <div class="homePage">
        <Header />
        <Projects />
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
    align-items: center;
    background-color: #FFFCF2;
}
</style>