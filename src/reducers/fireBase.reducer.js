export const ShowLoaderAC = () => {
    return { type: 'SHow_loader' }
}
export const AddNoterAC = (text) => {
    return { type: 'Add_Note', text }
}
export const DeleteNoteAC = (id) => {

    return { type: 'Delete_Note', id }
}
export const RefreshNoteAC = (asd) => {
    return { type: 'Refresh_Note', asd }
}
export const hideLoader = () => {
    return { type: 'Hide_loader' }
}

export const FireBaseReducer = (state, action) => {
    switch (action.type) {
        case "SHow_loader":
            return {
                ...state, loading: true
            };
        case "Hide_loader":
            return {
                ...state, loading: false
            }; case "Add_Note":
            return {
                ...state, notes: [...state.notes, action.text]
            }; case "Delete_Note":
            return {
                ...state, notes: state.notes.filter(note => note.id !== action.id)
            }; case "Refresh_Note":
            return {
                ...state, notes: action.asd
            }
        default: {
            return state
        }
    }
}



