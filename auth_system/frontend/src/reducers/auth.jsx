import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGIN_LOADED_SUCCESS,
    LOGIN_LOADED_FAIL,
} from '../actions/types'

const initialStates = {
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    isAuthenticated: null,
    user: null
};

export default function(state = initialStates, action) {
    const { type, payload } = action

    switch (type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('access', payload.access);
            return {
                ...state,
                isAuthenticated: true, 
                access: payload.access,
                refresh: payload.refresh,
        }
        case LOGIN_FAIL:
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            return {
                ...state,
                isAuthenticated: false, 
                access: null,
                refresh: null,
        }
         case LOGIN_LOADED_SUCCESS:
            return {
                ...state,
                user: payload,
        }
        case LOGIN_LOADED_FAIL:
            return {
                ...state,
                user: null,
        }
    }
}