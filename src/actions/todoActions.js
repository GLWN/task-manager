const deleteTodo = (id) => {
    return {
        type: 'deleteTodo',
        payload: id
    }
}

const changeTodoPosition = (position, offset) => {
    return {
        type: 'changeTodoPosition',
        payload: {
            pos: position,
            newPos: position + offset
        }
    }
}

const modifyTodo = (todo) => {
    return {
        type: 'modifyTodo',
        payload: todo
    }
}

const addTodo = (todo) => {
    return {
        type: 'addTodo',
        payload: todo
    }
}

export default {
    deleteTodo,
    changeTodoPosition,
    modifyTodo,
    addTodo
}