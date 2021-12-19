export let data = {
    authUser: null,

}

export function reducer(state, action) {
    switch (action.type) {
        case "AUTH_USER": {
            // console.log(action.payload)
            return {
                ...state,
                authUser: action.payload
            }
        }

       

        default:
            return state;

    }
}