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
        // case 'LOG_OUT':
        //     return state = false;
        default:
            return state;
    }
}
export default IsLogged;