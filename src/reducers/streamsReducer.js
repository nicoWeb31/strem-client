import _ from 'lodash';

import {
    CREATE_STREAM,
    DELETE_STREAM,
    GET_LIST_STREAM,
    GET_ONE_STREAM,
    EDIT_STREAM
} from '../action/types';



export default (state= {}, action) =>{
    switch(action.type){

        case GET_LIST_STREAM:
            //recuper le tableau et le transform en objet
            return {...state, ..._.mapKeys(action.payload, 'id')}
                
            

        case GET_ONE_STREAM : 
            return {
                ...state, [action.payload.id]: action.payload
            }
        
        case CREATE_STREAM :
            return {
                ...state, [action.payload.id]: action.payload
            }

        case  EDIT_STREAM : 
            return {
                ...state, [action.payload.id]: action.payload
            }

        case DELETE_STREAM : 
            return _.omit(state, action.payload)

        default:
            return state;
    }
}

