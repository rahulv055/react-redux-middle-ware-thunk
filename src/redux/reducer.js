const INTIAL_STATE = {
    user:[],
    loading:false
}

const testReducer = (state=INTIAL_STATE,action) => {
    switch(action.type){
        case 'CHANGE_NAME':
            return {
                ...state,
                user: action.payload.filter(user=>user.id<=4)
            }
            case 'LOADING':
                return {
                    ...state,
                    loading:action.payload
                    }
            case 'DELETE_USER':
              return {  ...state,
                user: state.user.filter(el => el.id!== action.payload),
              }
             
        default:
            return state
    }
}

export default testReducer;