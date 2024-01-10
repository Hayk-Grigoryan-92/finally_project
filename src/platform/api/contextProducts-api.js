import axios from "axios";

const content = 'contextProductH'

export const getContextProduct = async () => {
    return await axios.get(`${process.env.REACT_APP_BASE_URL}/${content}`)
}

export const createContextProduct = async (contextProductData) => {
    return await axios.post(`${process.env.REACT_APP_BASE_URL}/${content}`, contextProductData)
}

export const deleteContextProduct = async (id) => {
    return await axios.delete(`${process.env.REACT_APP_BASE_URL}/${content}/${id}`)
}