import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import allActions from '../actions'

const Modal = (props) => {
    const { idInModification } = props;
    const todos = useSelector(state => state.todos);
    const todoInModification = todos.filter(todo => todo.id === idInModification)[0] || false;

    const [label, setLabel] = useState(todoInModification.label || '');
    const [sublabel, setSublabel] = useState(todoInModification.sublabel || '');
    const [priority, setPriority] = useState(todoInModification.priority || false);

    const dispatch = useDispatch();

    const handleChange = e => {
        switch (e.target.name) {
            case 'label':
                setLabel(e.target.value);
                break;
            case 'sublabel':
                setSublabel(e.target.value);
                break;
            case 'priority':
                setPriority(!priority);
                break;
            default:
                break;
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        const id = idInModification ? todoInModification.id : Date.now();
        const date = new Date().toLocaleDateString();
        const time = new Date().toLocaleTimeString();
        const currentTodo = {id, label, sublabel, date, time, priority};

        if(idInModification) {
            dispatch(allActions.todoActions.modifyTodo(currentTodo))
        } else {
            dispatch(allActions.todoActions.addTodo(currentTodo))
        }

        closeModal();
    }

    const closeModal = () => {
        dispatch(allActions.modalActions.setModificationModalVisibility(false));
        dispatch(allActions.modalActions.setModalVisibility());
    }

    return(
        <div className='GLWN-modal fade-in'>
            <form action='' className='GLWN-form' onSubmit={handleSubmit}>
                <label>
                    <input type='text' name='label' autoFocus placeholder='Titre' value={label} onChange={handleChange} required></input>
                </label>
                <label>
                    <input type='text' name='sublabel' placeholder='Description' value={sublabel} onChange={handleChange}></input>
                </label>
                <div className='button-wrapper'>
                    <button type='button' onClick={closeModal}>
                        <i className="bi bi-file-earmark-x"></i>
                    </button>
                    <button type='submit' value='submit'>
                        <i className="bi bi-file-earmark-check"></i>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Modal