
import {
    ADD_TODO,
    ADD_TODO_ERROR,
    ADD_TODO_LOADING,
    ADD_TODO_SUCCESS,
    GET_TODO_ERROR,
    GET_TODO_LOADING,
    GET_TODO_SUCCESS,
    GET_TODO_STATUS,
    REMOVE_TODO,
    GET_TODO_UPDATE
} from "./actionTypes";



const init = { loading: false, todos: [], error: false };

export const reducer = (state = init, { type, payload }) => {

    switch (type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, payload]
            }
        case ADD_TODO_LOADING:
            return {
                ...state,
                loading: true
            }
        case ADD_TODO_SUCCESS:
            return {
                ...state,
                todos: [...state.todos, payload],
                loading: false,
            }
        case ADD_TODO_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
            }
        case GET_TODO_LOADING:
            return {
                ...state,
                loading: true
            }
        case GET_TODO_SUCCESS:
            return {
                ...state,
                todos: payload,
                loading: false,
            }
        case GET_TODO_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
            }

        case GET_TODO_STATUS:
            return {
                ...state,
                todos: state.todos.map(el => el.id === payload.id ? { ...el, status: !payload.status } : el)
            }
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter((el) => { if (el.id !== payload.id) return el })

            }

        case GET_TODO_UPDATE:
            return {
                ...state,
                todos: state.todos.map((el) => el.id === payload.id ? { ...el, title: payload.newTitle } : el)
            }


        default:
            return state;
    }

}