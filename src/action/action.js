import  {SIGN_IN,SIGN_OUT,CREATE_STREAM} from './types';
import apiStream from '../api/streams'


export const signIn = (userId) =>{
    return {
        type: SIGN_IN,
        payload : userId
    }
}


export const singnOut = () =>{
    return {
        type: SIGN_OUT
    }
}


export const createStream  = formValue => async dispatch =>{
    const response = await apiStream.createStream(formValue);
    
    dispatch ({type: CREATE_STREAM,payload:response.data})
    
}