import axios from "axios";

const content = 'category'

export const getCategoryList = async () => {
    return await axios.get(`${process.env.REACT_APP_BASE_URL}/${content}`)
}

export const addCategory = async (data) => {
    return await axios.post(`${process.env.REACT_APP_BASE_URL}/${content}`, data)
}

export const editCategory = async (data, id) => {
    return await axios.put(`${process.env.REACT_APP_BASE_URL}/${content}/${id}`, data)
}