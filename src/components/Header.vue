<template>
    <div class="header">
        <div class="controlIcon"></div>
        <div class="searchInput">
            <input type="text">
            <button class="searchBtn">查找</button>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
.header {
    height: 100px;
    display: flex;
    justify-content: space-between;

    .controlIcon {
        width: 100px;
    }

    .searchInput {
        padding: 30px 80px;

        input {
            height: 25px;
            width: 200px;
            margin-right: 20px;
            border-radius: 20px;
            background: #CCC5B9;
            opacity: 0.4;
            border: 0;
        }

        .searchBtn {
            height: 25px;
            width: 100px;
            border-radius: 20px;
            background: #EB5E28;
            border: 0;
        }
    }
}
</style>