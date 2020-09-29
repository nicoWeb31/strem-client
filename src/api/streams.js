import axios from 'axios'

const axiosInstance =  axios.create({
    baseURL:  "http://localhost:3001"
})



const createStream = (formValue) =>{
    return axiosInstance.post('/streams',formValue)
}


export default {
    createStream
}

