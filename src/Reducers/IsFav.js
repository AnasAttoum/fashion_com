const initialState = []

export default function IsFav(state = initialState, action) {
    switch (action.type) {
        case 'ADD_FAV':
            return [...state, action.payload]
        case 'DELETE_FAV':
            state.splice(state.indexOf(action.payload),1)
            return state
        default:
            return state
    }
}
