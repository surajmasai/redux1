
import {
    ADD_TODO,
    ADD_TODO_ERROR,
    ADD_TODO_LOADING,
    ADD_TODO_SUCCESS,
    GET_TODO_SUCCESS,
    GET_TODO_ERROR,
    GET_TODO_LOADING,
    REMOVE_TODO,
    GET_TODO_STATUS,
    GET_TODO_UPDATE
} from "./actionTypes"

export const addTodo = (data) => ({
    type: ADD_TODO,
    payload: data
});

export const addTodoLoading = () => {

    return {
        type: ADD_TODO_LOADING,
    }
}

export const addTodoSuccess = (data) => {

    return {
        type: ADD_TODO_SUCCESS,
        payload: data,
    }
}

export const addTodoError = (err) => {

    return {
        type: ADD_TODO_ERROR,
        payload: err,
    }
}

export const getTodoSuccess = (data) => {

    return {
        type: GET_TODO_SUCCESS,
        payload: data,
    }
}

export const getTodoLoading = () => {

    return {
        type: GET_TODO_LOADING,
    }
}

export const getTodoError = (err) => {

    return {
        type: GET_TODO_ERROR,
        payload: err,
    }
}

export const updateStatus = (e) => ({
    type: GET_TODO_STATUS,
    payload: e,
})

export const removeTodo = (e) => ({
    type: REMOVE_TODO,
    payload: e,
})

export const updateTodo = (e) => ({

    type: GET_TODO_UPDATE,
    payload: e,
})