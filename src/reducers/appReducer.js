const initialState = {
    isModalVisible: false,
    idInModification: false,
    todos: localStorage.todos?.length ? JSON.parse(localStorage.todos) : []
}

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'addTodo':
            return {
                ...state,
                todos: [
                    ...state.todos,
                    action.payload
                ]
            }
        case 'deleteTodo':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        case 'modifyTodo':
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if(todo.id === action.payload.id) {
                        return action.payload;
                    }
                    return todo;
                })
            }
        case 'setModificationModalVisibility':
            return {
                ...state,
                idInModification: action.payload
            };
        case 'changeTodoPosition':
            const { pos, newPos } = action.payload;
            const newTodosArray = state.todos;
            const objToDisplace = state.todos[pos];
            newTodosArray.splice(pos, 1);
            newTodosArray.splice(newPos, 0, objToDisplace);
            return {
                ...state,
                todos: [...newTodosArray]
            }
        case 'setModalVisibility':
            return {
                ...state,
                isModalVisible: !state.isModalVisible
            }
        default:
            return state;
    }
}

export default appReducer
