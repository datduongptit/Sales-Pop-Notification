import {CHANGE_EFFECT} from '../constants/constants';
import axios from 'axios';


export const changeState = () => async dispatch => {
    dispatch({
        type: CHANGE_EFFECT
    })
}