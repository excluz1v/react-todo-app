
export const ALertReducer = (state, action) => {
    switch (action.type) {
        case 'ShowAlert':
            return {
                ...state, visible: true, ...action.text,
            }
        case 'HideAlert':
            return {
                ...state, visible: false
            }; default: return state
    }

}

export const ShowAlertAC = (text) => {
    return { type: 'ShowAlert', text }
}
export const HideAlertAC = () => {
    return { type: 'HideAlert' }
}
