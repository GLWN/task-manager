import React from 'react'
import Todo from '../components/Todo'
import Modal from '../components/Modal'
import { useDispatch, useSelector } from 'react-redux'
import allActions from '../actions'

const TodoList = () => {
    const todos = useSelector(state => state.todos);
    const todosLength = useSelector(state => state.todos.length);
    const idInModification = useSelector(state => state.idInModification);
    const isModalVisible = useSelector(state => state.isModalVisible);
    const dispatch = useDispatch();

    return(
        <div className='GLWN-todolist fade-in'>
            <ul>
                { todos.map((todo, index) => (
                    <Todo 
                        key={todo.id} 
                        position={index}
                        todosLength={todosLength}
                        {...todo} 
                    />
                ))}
            </ul>
            {   
                todosLength > 0 &&
                    <div>
                        <button 
                            onClick={() => dispatch(allActions.modalActions.setModalVisibility())}
                            className='button-add'>
                            <i className="bi bi-file-earmark-plus"></i>
                        </button>
                        <button
                            onClick={() => dispatch(allActions.modalActions.setModalVisibility())}
                            className='mobile-menu'
                        >
                            ADD
                        </button>
                    </div>
            }
            {
                todosLength === 0 &&
                <button 
                    onClick={() => dispatch(allActions.modalActions.setModalVisibility())}
                    className='button-add button-add--empty'>
                    <i className="bi bi-file-earmark-plus"></i>
                </button>
            }

            { isModalVisible && <Modal idInModification={idInModification}/> }
        </div>
    )
}

export default TodoList

