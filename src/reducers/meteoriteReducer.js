import {
    FETCH_METEORITES_BEGIN,
    FETCH_METEORITES_SUCCESS,
    FETCH_METEORITES_FAILURE
} from '../actions/types';

const initialState = {
    meteorites: [],
    pageOfItems: [],
    loading: false,
    error: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_METEORITES_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case FETCH_METEORITES_SUCCESS:
            return {
                ...state,
                meteorites: action.payload,
                pageOfItems: [],
                loading: false,
                error: null
            }
        case FETCH_METEORITES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                meteorites: [],
                pageOfItems: []
            }
        default:
            return state;
    }
}