import Mock from 'mockjs'

// 使用mock模拟数据
const data = Mock.mock({
    projects: [
        {
            id: '1',
            projectTitle: 'test测试测试',
            projectDescription: '这里是简介简介姐姐诶二级及大文件对面开了sad你们看我你单位的那得看你但参悟大乃我',
            projectContent: [
                {
                    id: '1',
                    listTitle: '这是第一步', // 阶段性目标标题
                    listContent: [
                        {
                            id: '1',
                            targetText: '我要去摸鱼',
                            isShow: true
                        }
                    ],
                    isShow: true,
                    createTime: '2022.9.26',
                }
            ],
            creatTime: '2022.9.26',
            editTime: '2022.9.26',
            isShow: true
        },
        {
            id: '2',
            projectTitle: '也是侧查看电脑马',
            projectDescription: '才能玩你难道扶危济困女警啊男温暖的家你今儿看见那是你出现阿俊你今年人家啊你抽时间年代初尽可能仅',
            projectContent: [
                {
                    id: '1',
                    listTitle: '这是第一步', // 阶段性目标标题
                    listContent: [
                        {
                            id: '1',
                            targetText: '继续去摸鱼',
                            isShow: true
                        }
                    ],
                    isShow: true,
                    createTime: '2022.9.27',
                }
            ],
            creatTime: '2022.9.27',
            editTime: '2022.9.27',
            isShow: true
        }
    ]
})

// 获取列表的接口
Mock.mock('mock/projects', 'get', () => {
    return {
        status: 200,
        message: '数据获取成功',
        data: data.projects
    }
})
