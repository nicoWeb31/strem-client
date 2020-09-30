import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_STREAM,
    DELETE_STREAM,
    GET_LIST_STREAM,
    GET_ONE_STREAM,
    EDIT_STREAM
} from './types';

import apiStream from '../api/streams'


export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    }
}


export const singnOut = () => {
    return {
        type: SIGN_OUT
    }
}



//argument dispatch et getState
export const createStream = formValue => async (dispatch,getState) => {

    //on recupere usersId ans le store via getState() sur state auth
    const {usedId} = getState().auth;
    const response = await apiStream.createStream({...formValue, usedId});

    dispatch({ type: CREATE_STREAM, payload: response.data })

}

export const deleteStream = id => async dispatch => {
    await apiStream.deleteStream(id);

    dispatch({ type: DELETE_STREAM, payload : id})
}


export const getAllStream = () => async dispatch =>{
    const response = await apiStream.getStreamList();

    dispatch({type:GET_LIST_STREAM, payload : response.data })
}

export const getStream = id => async dispatch =>{
    const response = await apiStream.getOneStream(id)

    dispatch({type:GET_ONE_STREAM, payload : response.data})
}

export const editStream = (id,formValue) => async dispatch =>{
    const response = await apiStream.upDateStream(id,formValue)

    dispatch({type:EDIT_STREAM, payload : response.data })

}