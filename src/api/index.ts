import axios from 'axios'

// 获取项目列表内容
export const getProjectList = async () => {
    const res = await axios.get('mock/projects')
    return res.data
}

// 获取选中项目内容
export const getProjectDetail = async (data: object) => {
    const res = await axios.post('mock/project/detail', data)
    return res.data
}