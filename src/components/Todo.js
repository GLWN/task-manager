import React from 'react'
import { useDispatch } from 'react-redux';
import allActions from '../actions'

const Todo = (props) => {
    const {id, label, sublabel, date, time, position, todosLength} = props;
    const { todoActions, modalActions } = allActions;
    const dispatch = useDispatch();

    const showModifyModal = () => {
        dispatch(modalActions.setModalVisibility());
        dispatch(modalActions.setModificationModalVisibility(id));
    }

    return(
        <li className='GLWN-todo'>
            <section className='GLWN-todo--titles'>
                <h2>{label}</h2>
                <h3>{sublabel}</h3>
                <h4>{date} - {time}</h4>
            </section>
            <section className='GLWN-todo--buttons'>
                <button onClick={showModifyModal}>
                    <i className="bi bi-pencil-fill"></i>
                </button>

                <button type='button' onClick={() => dispatch(todoActions.deleteTodo(id))}>
                    <i className="bi bi-trash-fill"></i>
                </button>
                { position !== 0 &&   
                    <button type='button' onClick={() => dispatch(todoActions.changeTodoPosition(position, -1))}>
                        <i className="bi bi-arrow-up-square-fill"></i>
                    </button>
                }
                { position !== todosLength - 1 &&   
                    <button type='button' onClick={() => dispatch(todoActions.changeTodoPosition(position, 1))}>
                        <i className="bi bi-arrow-down-square-fill"></i>
                    </button>
                }
            </section>
        </li>
    )
}

export default Todo