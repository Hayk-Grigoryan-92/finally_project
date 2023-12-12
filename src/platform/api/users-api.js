import axios from "axios";

const content = 'usersH'

export const getUsers = async () => {
    return await axios.get(`${process.env.REACT_APP_BASE_URL}/${content}`)
}

export const createUser = async (userData) => {
    return await axios.post(`${process.env.REACT_APP_BASE_URL}/${content}`, userData)
}