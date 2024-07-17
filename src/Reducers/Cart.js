const cart = []

export default function Cart(state = cart, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            if (state.filter(element => {
                return element.productId === action.payload.productId && element.color.color === action.payload.color.color && element.size === action.payload.size
            }).length !== 0) {
                return state.map(element => {
                    if (element.productId === action.payload.productId && element.color.color === action.payload.color.color && element.size === action.payload.size) {
                        return { ...element, quantity: element.quantity + action.payload.quantity }
                    }
                    else {
                        return { ...element }
                    }
                })
            }
            else {
                return [...state, {
                    productId: action.payload.productId,
                    color: { ...action.payload.color },
                    size: action.payload.size,
                    quantity: action.payload.quantity
                }]
            }

        default:
            return state
    }
}
