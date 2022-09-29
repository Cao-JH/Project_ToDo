<template>
    <div class="projectDetail">
        <div class="controlBar"></div>
        <div class="header">
            <div class="projectTitle">{{list.projectTitle}}</div>
            <div class="btn">
                <button @click="$emit('colseHandler')" class="complete">完成</button>
                <button class="delete" @click="ddd">删除</button>
            </div>
        </div>
        <div class="description">
            <!-- 模拟textarea，且可以自适应高度 -->
            <div contenteditable="true" class="textarea" @input="saveText">
                {{list.projectDescription}}
            </div>
        </div>
        <div class="content">
            <n-collapse v-for="item in list.projectContent" class="contentList">
                <n-collapse-item :title="item.listTitle" name="1" class="listTitle">
                    <ul>
                        <li v-for="i in item.listContent" class="listContent">
                            <n-radio :value="i.targetText" :checked="i.isShow" name="target">
                                <span class="targetText">{{i.targetText}}</span>
                            </n-radio>
                            <div class="controller">
                                <button class="targetEdit">编辑</button>
                                <button class="targetDelete">删除</button>
                            </div>
                        </li>
                        <li class="addContent">
                            <svg-icon className="addIcon" iconName="add" />
                        </li>
                    </ul>
                    <template #header-extra>
                        <button>编辑</button>
                        <span>最后修改于</span>&nbsp;
                        <n-time :time="0" format="MM-dd hh:mm" />
                    </template>
                </n-collapse-item>
            </n-collapse>
            <div class="addContent">
                <svg-icon className="addIcon" iconName="add" />
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, reactive, ref } from 'vue';
import { NTime, NCollapse, NCollapseItem, NRadio } from 'naive-ui'
// 引入路由获取query参数
import { useRoute } from 'vue-router';
import { Project } from '@/types/project'

// route实例
const route = useRoute()

const { ipcRenderer } = window.require("electron");

// 获取数据
const projectDetail = async (data: object) => {

}

// ceshi
const getProjectData = async () => {

}

onBeforeMount(() => {
    projectDetail(route.query)
    getProjectData()
})

// 定义数据
const list = ref({} as Project)

const saveText = () => {
    // 输入内容即可触发事件，可以使用保存方法，还要加节流
    console.log(1111);
}


const ddd = () => {
    console.log(route.query);
    projectDetail(route.query)

}

</script>

<style lang="less" scoped>
.projectDetail {
    min-height: 100vh;
    background: #d3d3d3;
    border-radius: 20px;
    position: relative;
    border: 2px solid #fff;

    .controlBar {
        height: 30px;
    }

    .header {
        height: 90px;
        display: flex;
        justify-content: space-between;

        .projectTitle {
            width: 400px;
            font-size: 38px;
            margin: 15px 100px;
        }

        .btn {
            display: flex;
            justify-content: space-between;

            button {
                width: 65px;
                height: 40px;
                margin: 25px 20px;
                font-size: 16px;
                border: 2px solid #000;
                border-radius: 5px;
            }

            .complete {
                background-color: #84a98c;
            }

            .delete {
                background-color: #e56b6f;
            }
        }
    }

    .description {
        margin: 20px;
        border-radius: 5px;
        line-height: 30px;
        border: 2px solid #000;
        padding: 5px 20px;

        .textarea {
            width: 100%;
            height: auto;
            font-size: 16px;
            padding: 3px;
            outline: 0;
            line-height: 24px;
            padding: 2px;
            word-wrap: break-word;
        }
    }

    .content {
        padding: 20px;
        border-radius: 10px;

        .contentList {
            height: auto;
            margin-bottom: 20px;

            .listTitle {
                font-size: 14px;
                padding: 0 15px;
                border-radius: 15px;
                line-height: 30px;
                border: 2px solid #0b090a;
                background-color: #f5f3f4;

                .listContent {
                    list-style: none;
                    margin-bottom: 10px;
                    display: flex;
                    justify-content: space-between;
                    height: 28px;

                    .targetText {
                        border-bottom: 1px solid #252422;
                    }

                    .controller {
                        display: flex;
                        justify-content: space-around;

                        button {
                            width: 40px;
                            height: 28px;
                            margin: 0 3px;
                            border-radius: 5px;
                            display: none;
                            border: 2px solid #252422;
                        }

                        .targetEdit {
                            background-color: #8ecae6;
                        }

                        .targetDelete {
                            background-color: #e56b6f;
                        }
                    }
                }

                .listContent:hover {
                    button {
                        display: block;
                    }
                }
            }
        }
    }

    .addContent {
        width: 50%;
        height: 30px;
        margin: 0 auto;
        margin-bottom: 10px;
        list-style: none;
        border: 1px solid #252422;
        border-radius: 25px;
        text-align: center;
    }
}
</style>

<style>
.stowIcon {
    width: 35px !important;
    height: 38px;
}

.addIcon {
    width: 20px !important;
    height: 30px;
}
</style>