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
                <svg-icon className="addIcon" iconName="add" @click="addListContent" />
            </div>
        </div>
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
                <n-popconfirm :show-icon="false" positive-text="好的" :negative-text="null">
                    <template #trigger>
                        <button @click="projectPost">提交</button>
                    </template>
                    账号不能为空
                </n-popconfirm>
                <button @click="closeAdd">取消</button>
            </div>
        </div>
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
                <n-popconfirm :show-icon="false" positive-text="好的" :negative-text="null">
                    <template #trigger>
                        <button @click="projectPost">提交</button>
                    </template>
                    账号不能为空
                </n-popconfirm>
                <button @click="closeAdd">取消</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, reactive, ref } from 'vue';
import { NTime, NCollapse, NCollapseItem, NRadio } from 'naive-ui'
// 引入路由获取query参数
import { useRoute } from 'vue-router';
import { Project, ProjectContent, ListContent } from '@/types/project'

// route实例
const route = useRoute()

// 获取数据
const projectDetail = (data: object) => {
    // 读取本次存储，判断是否有需要的内容
    let result = localStorage.getItem('projects')
    if (result != null) {
        const projectList = JSON.parse(result)
        for (let i = 0; i < projectList.length; i++) {
            // 找到id对应的内容，赋值
            if (projectList[i].id == data) {
                console.log(projectList[i]);
                list.value = projectList[i]
            }
        }
    }
}

// ceshi
const getProjectData = async () => {

}

// 提取query中的id
var queryId: any
for (let id in route.query) {
    queryId = route.query[id]
}

onBeforeMount(() => {
    projectDetail(queryId)
    getProjectData()
})

// 定义数据
const list = ref({} as Project)
const projectContent = ref([] as ProjectContent[])
const ListContent = ref({} as ListContent)

const saveText = () => {
    // 输入内容即可触发事件，可以使用保存方法，还要加节流
    console.log(1111);
}

// 添加二级内容
const addListContent = () => {
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