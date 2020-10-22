import {CHANGE_EFFECT} from '../constants/constants'

const initialState = {
    display: true,
    hide: true
};


export default function(state = initialState, action) {
    switch (action.type) {
        case CHANGE_EFFECT:
           return {
               state,
           }
    
        default:
            return state
    }
}