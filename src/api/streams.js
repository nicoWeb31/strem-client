import axios from 'axios'

const axiosInstance =  axios.create({
    baseURL:  "http://localhost:3001"
})



const createStream = (formValue) =>{
    return axiosInstance.post('/streams',formValue)
}

const getStreamList = () =>{
    return axiosInstance.get('/streams')
}

const getOneStream =(id)=>{
    return axiosInstance.get(`/streams/${id}`)
}

const upDateStream = (id,formValue) =>{
    return axiosInstance.put(`/streams/${id}`,formValue)
}

const deleteStream = (id)=>{
    return axiosInstance.delete(`/streams/${id}`)
}


export default {
    createStream,
    getStreamList,
    getOneStream,
    upDateStream,
    deleteStream
}

