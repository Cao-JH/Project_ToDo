import Mock from 'mockjs'

// 使用mock模拟数据
const data = Mock.mock({
    data: [
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
        }
    ]
})

console.log(data);


// 模拟一个不需要传参的 get 请求
Mock.mock('mock/index', 'get', () => {
    return {
        status: 200,
        message: '数据获取成功',
        data
    }
})

// export default [
//     {
//         url: "mock/index",
//         method: "get",
//         response: () => {
//             return {
//                 code: 0,
//                 message: "ok",
//                 data: data,
//             }
//         }
//     }
// ]