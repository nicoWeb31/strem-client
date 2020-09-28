import {combineReducers} from 'redux';

import authReducer from './authReducer';

//reducer auto de la librery redux form
import { reducer as formReducer} from 'redux-form'




export default combineReducers({
    auth: authReducer,
    form: formReducer   ///form-reducer
})