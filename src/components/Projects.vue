<template>
    <div class="projectContainer">
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
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
.projectContainer {
    // border: 1px solid #000;
    display: flex;
    flex-wrap: wrap;
    height: calc(100vh - 200px);
    margin: 0 35px;
    width: 1350px;

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
</style>