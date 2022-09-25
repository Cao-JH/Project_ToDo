<template>
    <div class="header">
        <div class="controlIcon">

        </div>
        <div class="controlBar">
            <svg-icon v-for="(item, index) in iconList" className="controlIcon" :iconName="`${item}`"
                @click="controlHandler(index)" />
        </div>
        <div class="searchInput">
            <input type="text">
            <button class="searchBtn">查找</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

// 引入导航栏操作
const { ipcRenderer } = window.require("electron");

const iconList = reactive(['narrow', 'enlarge', 'close'])

// 控制方法
const controlHandler = (index: number) => {
    switch (index) {
        case 0:
            // 缩小
            ipcRenderer.send("min")
            break
        case 1:
            // 缩放
            ipcRenderer.send("max")
            break
        case 2:
            // 关闭
            ipcRenderer.send("close")
            break
    }
}

</script>

<style lang="less">
.controlBar {
    display: flex;
    justify-content: flex-end;

    .controlIcon {
        width: 22px;
        height: 22px;
        margin: 6px 5px;
        -webkit-app-region: no-drag;
    }
}
</style>

<style lang="less" scoped>
.header {
    width: 100%;
    height: 150px;
    position: relative;

    .controlBar {
        position: absolute;
        top: 0;
        width: 100%;
        text-align: end;
        padding-right: 5px;
        // 设置可以拖动
        -webkit-app-region: drag;
    }

    .searchInput {
        margin-right: 50px;
        margin-top: 50px;
        height: 30px;
        width: 350px;
        position: absolute;
        top: 30px;
        right: 0;

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