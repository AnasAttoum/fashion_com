const initialState = []

export default function IsFav(state = initialState, action) {
    switch (action.type) {
        case 'ADD_FAV':
            return [...state, action.payload]
        case 'DELETE_FAV':
            return state.filter(value=>{return value!==action.payload})
        default:
            return state
    }
}
