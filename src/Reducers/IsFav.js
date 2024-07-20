const initialState = []

export default function IsFav(state = initialState, action) {
    switch (action.type) {
        case 'ADD_FAV':
            return [...state, { id: action.payload.productId, color: action.payload.color }]
        case 'DELETE_FAV':
            return state.filter(value => { return value.id !== action.payload.productId || value.color.color !== action.payload.color.color })
        default:
            return state
    }
}
