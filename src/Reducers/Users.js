const users = [
    { id: 0, name: 'Anas Attoum', email: 'AnasAttoum.12321@gmail.com', password: '123456789' },
    { id: 1, name: 'Catherine Stucker', email: 'CatherineStucker@armyspy.com', password: '123456789' },
    { id: 2, name: 'John Capps', email: 'JohnCapps@rhyta.com', password: '123456789' },
    { id: 3, name: 'Lauren Elder', email: 'LaurenElder@dayrep.com', password: '123456789' }
]

export default function Users(state = users, action) {
    switch (action.type) {
        case 'ADD_USER':
            return [...users, {
                id: action.payload.id,
                name: action.payload.name,
                email: action.payload.email,
                password: action.payload.password
            }]
        case 'EDIT_USER_NAME':
            return state.map(element => {
                if (element.id === parseInt(action.payload.id)) {
                    return { ...element, name: action.payload.newName }
                }
                else {
                    return { ...element }
                }
            })
        case 'EDIT_USER_EMAIL':
            return state.map(element => {
                if (element.id === parseInt(action.payload.id)) {
                    return { ...element, email: action.payload.newEmail }
                }
                else {
                    return { ...element }
                }
            })
        case 'EDIT_USER_PASSWORD':
            return state.map(element => {
                if (element.id === parseInt(action.payload.id)) {
                    return { ...element, password: action.payload.newPassword }
                }
                else {
                    return { ...element }
                }
            })

        default:
            return state;
    }
}
