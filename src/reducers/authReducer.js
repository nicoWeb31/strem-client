import {SIGN_OUT,SIGN_IN} from '../action/types'

const INITIAL_STATE = {
    isSignedIn: null,
    userId: null
}

export default (state=INITIAL_STATE, action) =>{
    switch(action.type){
        case SIGN_IN :
            return {
                ...state, isSignedIn:true, usedId:action.payload 
            }
        case SIGN_OUT :
            return {
                ...state, isSignedIn: false, userId: null
            }
    
        default:
            return state;
    }
}

