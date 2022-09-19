<template>
    <div class="homePage">
        <div class="homeHeader">
            <div class="controlIcon"></div>
            <div class="searchInput">
                <input type="text">
                <button class="searchBtn">查找</button>
            </div>
        </div>
        <div class="homeContainer">
            <div class="leftContainer"></div>
            <div class="rightContainer">
                <div class="box">
                    <div class="time">2022/9/19</div>
                    <div class="text">
                        <div class="projectTitle">TESTETS</div>
                        <div class="projectDescription">
                            d312scawdawdsadwdsadawwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwdcsacsda234eqdwsd
                        </div>
                    </div>
                    <div class="progress">项目进度: 75%</div>
                </div>
                <div class="box">
                    <div class="time">2022/9/19</div>
                    <div class="text">
                        <div class="projectTitle">TESTETS</div>
                        <div class="projectDescription">d312scawdcsacsda234eqdwsd</div>
                    </div>
                    <div class="progress">项目进度: 75%</div>
                </div>
                <div class="box">
                    <div class="time">2022/9/19</div>
                    <div class="text">
                        <div class="projectTitle">TESTETS</div>
                        <div class="projectDescription">d312scawdcsacsda234eqdwsd</div>
                    </div>
                    <div class="progress">项目进度: 75%</div>
                </div>
                <div class="box">
                    <div class="time">2022/9/19</div>
                    <div class="text">
                        <div class="projectTitle">TESTETS</div>
                        <div class="projectDescription">d312scawdcsacsda234eqdwsd</div>
                    </div>
                    <div class="progress">项目进度: 75%</div>
                </div>
                <div class="box">
                    <div class="time">2022/9/19</div>
                    <div class="text">
                        <div class="projectTitle">TESTETS</div>
                        <div class="projectDescription">d312scawdcsacsda234eqdwsd</div>
                    </div>
                    <div class="progress">项目进度: 75%</div>
                </div>
                <div class="box">
                    <div class="time">2022/9/19</div>
                    <div class="text">
                        <div class="projectTitle">TESTETS</div>
                        <div class="projectDescription">d312scawdcsacsda234eqdwsd</div>
                    </div>
                    <div class="progress">项目进度: 75%</div>
                </div>
            </div>
        </div>
        <div class="homeFoot">这里是脚部</div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
.homePage {
    display: flex;
    flex-direction: column;
    background-color: #FFFCF2;

    .homeHeader {
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
                border: 0
            }

            .searchBtn {
                height: 25px;
                width: 100px;
                border-radius: 20px;
                background: #EB5E28;
            }
        }
    }

    .homeContainer {
        // border: 1px solid #000;
        height: calc(100vh - 170px);
        margin: 0 34px;
        display: flex;

        div {
            // border: 1px solid #000;
        }

        .rightContainer {
            display: flex;
            flex-wrap: wrap;

            .box {
                height: 300px;
                width: 200px;
                border-radius: 25px;
                background: #CCC5B9;
                margin: 0 35px 35px 35px;
                position: relative;

                .time {
                    font-family: Inter;
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 17px;
                    letter-spacing: 0em;
                    text-align: right;
                    color: #252422;
                    opacity: 0.7;
                    margin: 15px 15px 0 0;
                }

                .text {
                    display: flex;
                    flex-direction: column;

                    .projectTitle {
                        font-family: Inter;
                        font-size: 30px;
                        font-weight: 400;
                        line-height: 39px;
                        text-align: center;
                        margin: 10px;
                    }

                    .projectDescription {
                        font-family: Inter;
                        font-size: 20px;
                        font-weight: 400;
                        line-height: 24px;
                        text-align: center;
                        margin: 0 20px;
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
                }

                .progress {
                    width: 200px;
                    text-align: center;
                    position: absolute;
                    bottom: 15px;
                    color: #252422;
                    opacity: 0.7;
                }
            }
        }
    }

    .homeFoot {
        // border: 1px solid #000;
        height: 70px;
    }
}
</style>