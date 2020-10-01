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
    //patch met a jour juste les nouvelle infos, put remplace
    return axiosInstance.patch(`/streams/${id}`,formValue)
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

