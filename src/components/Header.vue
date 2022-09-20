<template>
    <div class="header">
        <div class="controlIcon"></div>
        <div class="controlBar">
            <svg t="1663643508974" class="narrowIcon" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="861" width="22" height="22" @click="narrow">
                <path
                    d="M807.6288 550.8096H224.2048c-17.5104 0-30.72-16.7936-30.72-38.7072s13.3632-38.7072 30.72-38.7072h583.424c17.5104 0 30.72 16.7936 30.72 38.7072s-14.0288 38.7072-30.72 38.7072z"
                    p-id="862" fill="#252422"></path>
                <path
                    d="M807.5776 554.0352H224.2048c-19.456 0-34.0992-18.0224-34.0992-41.9328s14.6432-41.9328 34.0992-41.9328h583.3728c19.456 0 34.0992 18.0224 34.0992 41.9328 0 23.1424-15.2576 41.9328-34.0992 41.9328zM224.2048 476.6208c-15.7696 0-27.648 15.36-27.648 35.4816s11.8784 35.4816 27.648 35.4816h583.3728c15.36 0 27.648-15.9232 27.648-35.4816s-11.8784-35.4816-27.648-35.4816z"
                    p-id="863" fill="#252422"></path>
            </svg>
            <svg t="1663643782826" class="enlargeIcon" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="1172" width="22" height="22" @click="enlarge">
                <path
                    d="M470.624 553.376a32 32 0 0 1 2.656 42.24l-2.656 3.008L269.28 800l145.984 0.032a32 32 0 0 1 31.776 28.256l0.224 3.744a32 32 0 0 1-28.288 31.776l-3.712 0.224H192l-2.4-0.096-4.032-0.544-3.552-0.96-3.552-1.408-3.136-1.664-3.072-2.144-2.88-2.56a32.32 32.32 0 0 1-3.104-3.584l-2.272-3.52-1.728-3.648-1.12-3.36-0.96-4.8L160 832v-224.128a32 32 0 0 1 63.776-3.712l0.224 3.712-0.032 146.848 201.408-201.344a32 32 0 0 1 45.248 0zM608.736 160H832l2.4 0.096 4.032 0.544 3.552 0.96 3.552 1.408 3.136 1.664 3.072 2.144 2.88 2.56c1.152 1.12 2.176 2.336 3.104 3.584l2.272 3.52 1.728 3.648 1.12 3.36 0.96 4.8L864 192v224.128a32 32 0 0 1-63.776 3.712L800 416.128v-146.88l-201.376 201.376a32 32 0 0 1-47.904-42.24l2.656-3.008L754.688 224h-145.92a32 32 0 0 1-31.808-28.256L576.736 192a32 32 0 0 1 28.288-31.776L608.736 160z"
                    p-id="1173"></path>
            </svg>
            <svg t="1663643812487" class="closeIcon" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="1347" width="22" height="22" @click="close">
                <path
                    d="M548.992 503.744L885.44 167.328a31.968 31.968 0 1 0-45.248-45.248L503.744 458.496 167.328 122.08a31.968 31.968 0 1 0-45.248 45.248l336.416 336.416L122.08 840.16a31.968 31.968 0 1 0 45.248 45.248l336.416-336.416L840.16 885.44a31.968 31.968 0 1 0 45.248-45.248L548.992 503.744z"
                    p-id="1348" fill="#252422"></path>
            </svg>
        </div>
        <div class="searchInput">
            <input type="text">
            <button class="searchBtn">查找</button>
        </div>
    </div>
</template>

<script setup lang="ts">
// 引入导航栏操作
const { ipcRenderer } = window.require("electron");

// 缩小
const narrow = () => {
    ipcRenderer.send("min"); // 通知主进程我要进行窗口最小化操作
}

// 放大
const enlarge = () => {
    ipcRenderer.send("max"); // 通知主进程我要进行最大化 或 还原
}

// 关闭
const close = () => {
    ipcRenderer.send("close"); // 通知主进程我要关闭
}
</script>

<style lang="less" scoped>
.header {
    width: 100%;
    height: 150px;
    position: relative;

    .controlIcon {
        width: 100px;
    }

    .controlBar {
        position: absolute;
        top: 0;
        width: 100%;
        text-align: end;
        padding-right: 5px;
        // 设置可以拖动
        -webkit-app-region: drag;

        svg {
            margin: 5px 4px;
            -webkit-app-region: no-drag;
        }
    }

    .searchInput {
        margin-right: 50px;
        margin-top: 80px;
        height: 30px;
        width: 350px;
        position: absolute;
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