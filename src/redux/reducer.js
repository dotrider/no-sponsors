// import { auth } from '../api/fire';

let initialState = {
    user: {
        isLoggedIn: false
    }
}

const SET_USER = 'SET_USER';
const USER_LOGOUT = 'USER_LOGOUT';
const USER_SESSION = 'USER_SESSION';

export const setSession = () => {
    let user;

    return {
        type: USER_SESSION,
        payload: user
    }
}

export const setUser = (userData) => {
    console.log('setUser', userData)
    return {
        type: SET_USER,
        payload: userData
    }
}


export default function reducer(state = initialState, action){
    const { type, payload } = action;
    console.log('reducer', type, payload)
    switch(type){
        case SET_USER:
            return {...state, user:{ ...payload, isLoggedIn: true }};
        case USER_LOGOUT:
            return { ...state, user:{ isLoggedIn: false }};
        case USER_SESSION + '_PENDING':
            return { ...state, user:{ isLoggedIn: false }};
        case USER_SESSION + '_FULFILLED':
            return { ...state, user:{ ...payload.data, isLoggedIn: true }};
        case USER_SESSION + '_REJECTED':
            return { ...state, user:{ isLoggedIn: false }};
        default:
            return state;
        
    }
}