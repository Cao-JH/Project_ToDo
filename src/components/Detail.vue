<template>
    <div class="projectDetail">
        <div class="controlBar"></div>
        <div class="header">
            <div class="projectTitle">{{list.projectTitle}}</div>
            <div class="btn">
                <button @click="$emit('colseHandler')" class="complete">完成</button>
                <button class="delete">删除</button>
            </div>
        </div>
        <div class="content">
            <div class="description">{{list.projectDescription}}</div>
            <ul class="projectContent">
                <li>
                    <div class="lists" v-for="item in list.content" :key="item.id">
                        <div class="listTitle">
                            <span>{{item.listTitle}}</span>
                            <svg-icon className="stowIcon" iconName="up" />
                        </div>
                        <div v-for="i in item.listContent" :key="i.id">
                            <input type="radio" name="" id="" value="" />
                            <div class="target">{{i.targetText}}</div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="lists" v-for="item in list.content" :key="item.id">
                        <div class="listTitle">{{item.listTitle}}</div>
                        <div v-for="i in item.listContent" :key="i.id">
                            <div class="target">{{i.targetText}}</div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="lists" v-for="item in list.content" :key="item.id">
                        <div class="listTitle">{{item.listTitle}}</div>
                        <div v-for="i in item.listContent" :key="i.id">
                            <div class="target">{{i.targetText}}</div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="lists" v-for="item in list.content" :key="item.id">
                        <div class="listTitle">{{item.listTitle}}</div>
                        <div v-for="i in item.listContent" :key="i.id">
                            <div class="target">{{i.targetText}}</div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="lists" v-for="item in list.content" :key="item.id">
                        <div class="listTitle">{{item.listTitle}}</div>
                        <div v-for="i in item.listContent" :key="i.id">
                            <div class="target">{{i.targetText}}</div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="lists" v-for="item in list.content" :key="item.id">
                        <div class="listTitle">{{item.listTitle}}</div>
                        <div v-for="i in item.listContent" :key="i.id">
                            <div class="target">{{i.targetText}}</div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="lists" v-for="item in list.content" :key="item.id">
                        <div class="listTitle">{{item.listTitle}}</div>
                        <div v-for="i in item.listContent" :key="i.id">
                            <div class="target">{{i.targetText}}</div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="lists" v-for="item in list.content" :key="item.id">
                        <div class="listTitle">{{item.listTitle}}</div>
                        <div v-for="i in item.listContent" :key="i.id">
                            <div class="target">{{i.targetText}}</div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="lists" v-for="item in list.content" :key="item.id">
                        <div class="listTitle">{{item.listTitle}}</div>
                        <div v-for="i in item.listContent" :key="i.id">
                            <div class="target">{{i.targetText}}</div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="lists" v-for="item in list.content" :key="item.id">
                        <div class="listTitle">{{item.listTitle}}</div>
                        <div v-for="i in item.listContent" :key="i.id">
                            <div class="target">{{i.targetText}}</div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="lists" v-for="item in list.content" :key="item.id">
                        <div class="listTitle">{{item.listTitle}}</div>
                        <div v-for="i in item.listContent" :key="i.id">
                            <div class="target">{{i.targetText}}</div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="lists" v-for="item in list.content" :key="item.id">
                        <div class="listTitle">{{item.listTitle}}</div>
                        <div v-for="i in item.listContent" :key="i.id">
                            <div class="target">{{i.targetText}}</div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="lists" v-for="item in list.content" :key="item.id">
                        <div class="listTitle">{{item.listTitle}}</div>
                        <div v-for="i in item.listContent" :key="i.id">
                            <div class="target">{{i.targetText}}</div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="lists" v-for="item in list.content" :key="item.id">
                        <div class="listTitle">{{item.listTitle}}</div>
                        <div v-for="i in item.listContent" :key="i.id">
                            <div class="target">{{i.targetText}}</div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="lists" v-for="item in list.content" :key="item.id">
                        <div class="listTitle">{{item.listTitle}}</div>
                        <div v-for="i in item.listContent" :key="i.id">
                            <div class="target">{{i.targetText}}</div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="lists" v-for="item in list.content" :key="item.id">
                        <div class="listTitle">{{item.listTitle}}</div>
                        <div v-for="i in item.listContent" :key="i.id">
                            <div class="target">{{i.targetText}}</div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="lists" v-for="item in list.content" :key="item.id">
                        <div class="listTitle">{{item.listTitle}}</div>
                        <div v-for="i in item.listContent" :key="i.id">
                            <div class="target">{{i.targetText}}</div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="lists" v-for="item in list.content" :key="item.id">
                        <div class="listTitle">{{item.listTitle}}</div>
                        <div v-for="i in item.listContent" :key="i.id">
                            <div class="target">{{i.targetText}}</div>
                        </div>
                    </div>
                </li>
            </ul>
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
.projectDetail {
    min-height: 100vh;
    background: #CCC5B9;
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
            font-size: 48px;
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

    .content {
        padding: 20px;
        border-radius: 10px;

        .description {
            height: auto;
            margin-bottom: 20px;
        }

        .projectContent {
            list-style: none;


            .lists {
                margin-bottom: 25px;

                .listTitle {
                    padding: 0 15px;
                    background: #252422;
                    opacity: 0.4;
                    border-radius: 15px;
                    display: flex;
                    justify-content: space-between;

                    span {
                        color: #FFFCF2;
                        font-size: 20px;
                        line-height: 40px;
                    }

                }

                .target {
                    margin: 5px auto;
                    line-height: 25px;

                }
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
</style>