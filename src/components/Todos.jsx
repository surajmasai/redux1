import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addTodoError, addTodoLoading, addTodoSuccess, getTodoError, getTodoLoading, getTodoSuccess, updateStatus, removeTodo, updateTodo } from '../store/action';

import Modal from "./Modal"



export const Todos = () => {
    const [text, setText] = useState("");

    // const [newTitle, setNewTitle] = useState("")



    const { loading, todos, error } = useSelector((state) => ({
        loading: state.loading,
        todos: state.todos,
        error: state.error
    }))

    const dispatch = useDispatch();

    useEffect(() => {
        getTodos()
    }, [])


    async function getTodos() {

        try {
            dispatch(getTodoLoading());
            const data = await fetch('http://localhost:3001/todos').then((d) => d.json())

            dispatch(getTodoSuccess(data))

        } catch (err) {

            dispatch(getTodoError(err))

        }

    }





    const addTodo = () => {
        dispatch(addTodoLoading())
        fetch("http://localhost:3001/todos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status: false, title: text }),
        }).then(d => d.json()).then(res => {
            //success
            dispatch(addTodoSuccess(res))
            console.log(res)
            getTodos()
        }).catch(err => {
            //error
            dispatch(addTodoError(err))
        })
        // dispatch(addTodo(text));


    }


    function updatestatus(e) {
        // console.log(e)
        dispatch(updateStatus(e))

    }

    function removTodo(e) {
        // console.log(e)
        dispatch(removeTodo(e))
    }

    // function handleEdit(e) {
    //     console.log("sdodjowe", e)
    //     // let payload = { ...e, newTitle: newTitle }
    //     // dispatch(updateTodo(payload))
    // }



    return loading ? (<div>Loading.....</div>) : error ? (<div>Something went wrong</div>) : (
        <div>
            <h1>hello!</h1>

            <Box sx={{ width: 500, maxWidth: '100%', display: 'flex' }}>
                <TextField fullWidth label="ADDTODO" id="fullWidth" onChange={(e) => setText(e.target.value)} />
                <Button variant="contained"
                    onClick={() => {
                        addTodo()

                    }} >Add Todo</Button>
            </Box>


            {todos.map((e, i) => (
                <div key={i} className="maindiv">{e.title} - {e.status ? "done" : "Not done"}
                    <Button onClick={() => { updatestatus(e) }} >complete</Button>


                    <Modal data={e} />

                    {/* <input type="text" placeholder="text here" onChange={(e) => setNewTitle(e.target.value)} />
                                <button onClick={() => handleEdit(e)}>save</button> */}


                    <Button onClick={() => { removTodo(e) }}>Delete</Button>
                </div>
            ))}

        </div>
    )

}