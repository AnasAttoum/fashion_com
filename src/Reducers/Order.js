const order = []

export default function Order(state = order, action) {
    switch (action.type) {
        case 'ADD_ORDER':
            return [...state, {
                id: Object.keys(state).length,
                date:new Date(),
                status: 'In Progress',
                paymentMethod:'Cash on delivery',
                cart: action.payload.cart,
                phone:action.payload.phone,
                fullAddress:action.payload.address
            }]
        default:
            return state
    }
}
