// todo列表里的每一个小细节
interface ListContent {
    id: number,
    targetText: string,
    isShow: boolean
}

// 整个todo列表
interface ProjectContent {
    id: number,
    listTitle: string, // 阶段性目标标题
    listContent: ListContent[],
    isShow: boolean,
    createTime: string,
}

// 一个项目
export interface Project {
    id: number,
    projectTitle: string, // 项目名称
    projectDescription: string, // 项目简介
    projectContent: ProjectContent[],
    creatTime: string,
    editTime: string,
    isShow: boolean
}
