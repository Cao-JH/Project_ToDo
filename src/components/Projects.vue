<template>
    <div class="projectContainer">
        <n-card title="" hoverable v-for="item in listData" :key="item.id" @click="show(item.id)">
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
        <n-card id="addProject" @click="openAdd">
            <svg-icon className="add" iconName="add" />
        </n-card>
    </div>
    <div class="mask" v-show="maskShow">
        <div class="backmask" @click="closeAdd"></div>
        <div class="addForm">
            <div class="addHeader">新增</div>
            <div class="addBody">
                <div class="inputBox">
                    项目名: <input type="text" v-model="addData.projectTitle">
                </div>
                <div class="textareaBox" contenteditable="true" @input="saveText($event)">

                </div>
            </div>
            <div class="addFooter">
                <button @click="projectPost">提交</button>
                <button @click="closeAdd">取消</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, reactive, onMounted } from 'vue'
import { NCard, NEllipsis } from 'naive-ui'
// 引入api接口
import { getProjectList, addProject } from '@/api/index'
// 引入type
import { Project } from '@/types/project'
import { computed } from '@vue/reactivity';
// 引入uuid
import { v4 } from 'uuid'
// 引入ipc通信
const { ipcRenderer } = window.require("electron");

// 定义获取数据的方法
const getProjectData = async () => {
    const res = await getProjectList()
    listData.value = res.data
    console.log(listData.value.length);
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

var nowDate = new Date().getTime(); //获取到当前时间戳
// 定义id值
let newUuid = v4()

const addData = reactive<Project>({
    id: newUuid.replace(/[-]/g, ''),
    projectTitle: '', // 项目名称
    projectDescription: '', // 项目简介
    projectContent: null,
    creatTime: nowDate,
    editTime: nowDate,
    isShow: true
})

console.log(addData);

// 输入完时将结果赋值给项目描述
const saveText = (e: any) => {
    addData.projectDescription = e.target.innerText
}

// 打开对应的内容窗口
const show = (id: number) => {
    ipcRenderer.send('openNewWin', id)
}

// 添加页控制方法
let maskShow = ref(false)
// 打开添加页
const openAdd = () => {
    maskShow.value = true
}
// 提交内容
const projectPost = async () => {
    console.log(addData, 'addData');
    const res = await addProject(addData)
    console.log(res, 'res');
    maskShow.value = false
    getProjectData()
}
// 关闭添加页
const closeAdd = () => {
    maskShow.value = false
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

.mask {
    position: absolute;
    width: 100vw;
    height: 100vh;


    .backmask {
        position: absolute;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.3);
        z-index: 1;
    }

    .addForm {
        position: absolute;
        top: calc(50% - 120px);
        left: calc(50% - 250px);
        width: 500px;
        height: 240px;
        padding: 10px 15px;
        background-color: #d3d3d3;
        border-radius: 20px;
        border: 3px solid #161a1d;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        z-index: 2;

        .addHeader {
            border-bottom: 1px solid #0b090a;
        }

        .addBody {

            .inputBox {
                margin: 12px 50px;
                width: 375px;
                text-align: center;
                font-size: 16px;

                input {
                    border: 0;
                    background-color: #d3d3d3;
                    border-bottom: 2px solid #0b090a;
                    width: 200px;
                    font-size: 20px;
                    padding: 0 5px;
                    outline: none;
                }
            }

            .textareaBox {
                border: 2px solid #000;
                border-radius: 5px;
                padding: 0 5px;
                margin: 0 50px;
                outline: none;
                max-height: 95px;
                // 暂时使用hidden，后面修改滚轮样式
                overflow: hidden;
            }
        }

        .addFooter {
            text-align: center;

            button {
                width: 50px;
                height: 30px;
                margin: 0 10px;
                font-size: 14px;
                border: 2px solid #000;
                border-radius: 5px;
            }

            button:nth-child(1) {
                background-color: #84a98c;
            }

            button:nth-child(2) {
                background-color: #e56b6f;
            }
        }
    }
}
</style>