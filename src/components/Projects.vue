<template>
    <div class="projectContainer">
        <n-card title="" hoverable @click="show" v-for="item in listData">
            <template #header>
                <n-ellipsis style="max-width: 150px; font-size: 22px; font-weight: 600;" class="projectTitle">
                    {{item.projectTitle}}
                </n-ellipsis>
            </template>
            <template #default>
                <div class="projectDescription">
                    {{item.projectDescription}}
                </div>
                <div class="needTodo">
                    <span class="todoNum">32 </span>
                    <span>Need To Do</span>
                </div>
            </template>
            <template #footer>
                <div class="time"><span>修改于</span> {{item.editTime}}</div>
            </template>
        </n-card>
        <n-card id="addProject">
            <svg-icon className="add" iconName="add" />
        </n-card>
    </div>
    <template v-if="bol">
        <Detail @colse-handler="close"></Detail>
    </template>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, reactive } from 'vue'
import Detail from './Detail.vue'
import { NCard, NEllipsis } from 'naive-ui'
// 引入api接口
import { getProjectList } from '@/api/index'
// 引入type
import { Project } from '../types/project'
// 引入ipc通信
const { ipcRenderer } = window.require("electron");

// 定义获取数据的方法
const getProjectData = async () => {
    const res = await getProjectList()
    console.log(res);
    listData.value = res.data
}

// 内容挂载时
onBeforeMount(() => {
    getProjectData()
})

// 定义数据规则
/**
 * vue3 + ts 动态绑定数组
 * 1. ref
 *      const listData = ref([] as Project[])
 *      使用 listData.value 赋值
 * 2. reactive
 *      const listData: Project[] = reactive([])
 *      使用 .push(...data) 赋值
 * 3. const data = reactive({
 *        listData: [] as Project[]
 *     })
 *      直接赋值
 */
// const listData: Project[] = reactive([])
const listData = ref([] as Project[])

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

<style>
#addProject {
    border: 2px dashed #000;
    opacity: 0.5;
}

.add {
    width: 100% !important;
    height: 100%;
    opacity: 0.3;
}
</style>

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
        border: 2px solid #0b090a;
        border-radius: 25px;
        background: #f5f3f4;
        margin: 0 35px 35px 35px;
        position: relative;
        cursor: pointer;

        .projectTitle {
            font-family: Inter;
            font-size: 24px;
            font-weight: 400;
            line-height: 39px;
            text-align: center;
            // margin: 10px;
        }

        .projectDescription {
            font-family: Inter;
            font-size: 16px;
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
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical
        }

        .needTodo {
            width: 90px;
            font-size: 12px;
            position: absolute;
            bottom: 55px;
            right: 22px;

            .todoNum {
                color: #e5383b;
                font-weight: 600;
            }
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

    .n-card:hover {
        box-shadow: #252422 10px 10px;
        transform: translateX(-5px) translateY(-5px);
        transition: ease-out 0.4s;
    }

    .n-card {
        transform: translateX(5px) translateY(5px);
        transition: ease-out 0.4s;
    }
}
</style>