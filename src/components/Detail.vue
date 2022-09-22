<template>
    <div class="mask">
        <div class="projectDetail">
            <div class="bar"></div>
            <div class="content">
                <div class="projectTitle">{{list.projectTitle}}</div>
                <ul class="projectContent">
                    <li>
                        <div class="description">{{list.projectDescription}}</div>
                        <div class="lists" v-for="item in list.content" :key="item.id">
                            <div class="listTitle">{{item.listTitle}}</div>
                            <div v-for="i in item.listContent" :key="i.id">
                                <div class="target">{{i.targetText}}</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="description">{{list.projectDescription}}</div>
                        <div class="lists" v-for="item in list.content" :key="item.id">
                            <div class="listTitle">{{item.listTitle}}</div>
                            <div v-for="i in item.listContent" :key="i.id">
                                <div class="target">{{i.targetText}}</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="description">{{list.projectDescription}}</div>
                        <div class="lists" v-for="item in list.content" :key="item.id">
                            <div class="listTitle">{{item.listTitle}}</div>
                            <div v-for="i in item.listContent" :key="i.id">
                                <div class="target">{{i.targetText}}</div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="btn">
                <button @click="$emit('colseHandler')" class="complete">完成</button>
                <button class="delete">删除</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';


const list = reactive(
    {
        id: 1,
        projectTitle: 'TESTETS', // 项目名称
        projectDescription: 'dnandieufnbsdjklncveon啊我的你骂我里卖弄', // 项目简介
        content: [
            {
                id: 1,
                listTitle: '第一步', // 阶段性目标标题
                listContent: [
                    {
                        id: 1,
                        targetText: '完成1' // 阶段性目标1
                    },
                    {
                        id: 2,
                        targetText: '阶段性目标2'
                    }
                ]
            }
        ],
        createTime: '2022/9/20',
        editTime: '2022/9/20', // 默认排序以编辑时间为主
        isShow: true, // 用来控制删除
    }
)

</script>

<style lang="less" scoped>
.mask {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;

    .projectDetail {
        width: 800px;
        height: 800px;
        background: #CCC5B9;
        border-radius: 20px;
        position: relative;
        border: 2px solid #fff;

        .bar {
            height: 20px;
        }

        .content {

            .projectTitle {
                width: 400px;
                font-size: 48px;
                margin: 15px 100px 30px 100px;
            }

            .projectContent {
                display: flex;
            }
        }

        .btn {
            position: absolute;
            right: 0;
            top: 20px;

            button {
                width: 70px;
                height: 40px;
                font-size: 16px;
                margin: 15px 30px 0 0;
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
}
</style>