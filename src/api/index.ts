import axios from 'axios'

// 获取项目列表内容
export const getProjectList = () => {
    return axios.get('mock/projects').then(res => res.data)
}