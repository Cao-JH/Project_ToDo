<template>
    <div class="projectContainer">
        <n-card title="" hoverable @click="show">
            <template #header>
                <div class="projectTitle">TESTETS</div>
            </template>
            <template #default>
                <div class="projectDescription">
                    d312scawdawdsadwdsadawwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwdcsacsda234eqdwsd
                </div>
            </template>
            <template #footer>
                <div class="time"><span>修改于</span> 2022/9/19</div>
            </template>
        </n-card>
    </div>
    <template v-if="bol">
        <Detail @colse-handler="close"></Detail>
    </template>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Detail from './Detail.vue'
import { NCard } from 'naive-ui'
// 引入ipc
const { ipcRenderer } = window.require("electron");

let bol = ref(false)

const show = () => {
    console.log(11111);
    // bol.value = true
    ipcRenderer.send('openNewWin')
}

const close = (val: boolean) => {
    bol.value = val
}

</script>

<style lang="less" scoped>
.projectContainer {
    // border: 1px solid #000;
    display: flex;
    flex-wrap: wrap;
    height: calc(100vh - 200px);
    margin: 0 35px;
    width: 1350px;

    .n-card {
        height: 300px;
        width: 200px;
        border-radius: 25px;
        background: #CCC5B9;
        margin: 0 35px 35px 35px;
        position: relative;

        .projectTitle {
            font-family: Inter;
            font-size: 30px;
            font-weight: 400;
            line-height: 39px;
            text-align: center;
            // margin: 10px;
        }

        .projectDescription {
            font-family: Inter;
            font-size: 20px;
            font-weight: 400;
            line-height: 24px;
            text-align: center;
            // margin: 0 20px;
            color: #403D39;

            /*文字换行  汉字和英文数字字符也适配*/
            white-space: normal;
            word-break: break-all;
            word-wrap: break-word;
            /**指定div内容 几行 然后省略号**/
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 6;
            -webkit-box-orient: vertical
        }

        .time {
            font-family: Inter;
            font-size: 14px;
            font-weight: 400;
            line-height: 17px;
            letter-spacing: 0em;
            text-align: right;
            color: #252422;
            opacity: 0.7;
            margin-right: 0px;
        }
    }
}
</style>