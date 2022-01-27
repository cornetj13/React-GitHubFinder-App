// The home for all the results that happen after a function has been triggered.

const githubReducer = (state, action) => {
    switch(action.type) {
        case 'GET_USERS': 
            return {
                ...state, 
                users: action.payload,
                loading: false
            }
        case 'GET_USER_AND_REPOS':
            return {
                ...state,
                user: action.payload.user,
                repos: action.payload.repos,
                loading: false
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: true
            }
        case 'CLEAR_USERS':
            return {
                ...state,
                users: []
            }
        default:
            return state
    }
}

export default githubReducer