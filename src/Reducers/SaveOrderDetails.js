const orderDetails = {}

export default function SaveOrderDetails(state = orderDetails, action) {
    switch(action.type){
        case 'SAVE_ORDER_DETAILS':
            return{
                phone:action.payload.phone,
                fullAddress:action.payload.address
            }
        default:
            return state
    }
}