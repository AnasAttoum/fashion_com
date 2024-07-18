const logged = {
    log: false,
    account: {
        id: '',
        name: '',
        email: '',
        password: '',
    }
}

const IsLogged = (state = logged, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return {
                log: true, account: {
                    id: action.payload.id,
                    name: action.payload.name,
                    email: action.payload.email,
                    password: action.payload.password,
                }
            }
        case 'SIGN_OUT':
            return {
                log: false,
                account: {
                    id: '',
                    name: '',
                    email: '',
                    password: '',
                }
            }
        case 'EDIT_CURRENT_NAME':
            return { ...state, account: { ...state.account, name: action.payload.newName } }
        case 'EDIT_CURRENT_EMAIL':
            return { ...state, account: { ...state.account, email: action.payload.newEmail } }
        case 'EDIT_CURRENT_PASSWORD':
            return { ...state, account: { ...state.account, password: action.payload.newPassword } }
        default:
            return state;
    }
}
export default IsLogged;