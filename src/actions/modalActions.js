const setModalVisibility = () => {
    return{
        type: 'setModalVisibility'
    }
}

const setModificationModalVisibility = (status) => {
    return{
        type: 'setModificationModalVisibility',
        payload: status
    }
}

export default {
    setModalVisibility,
    setModificationModalVisibility
}