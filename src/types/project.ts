// todo列表里的每一个小细节
export interface ListContent {
    id: number,
    targetText: string,
    isShow: boolean
}

// 整个todo列表
export interface ProjectContent {
    id: number,
    listTitle: string, // 阶段性目标标题
    listContent: ListContent[] | null,
    isShow: boolean,
    createTime: number,
}

// 一个项目
export interface Project {
    id: number,
    projectTitle: string, // 项目名称
    projectDescription: string | null, // 项目简介
    projectContent: ProjectContent[] | null,
    creatTime: number,
    editTime: number,
    isShow: boolean
}
