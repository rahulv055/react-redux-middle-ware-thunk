import Axios from "axios";

export const getUserList = () => {
    return async (dispatch) => {
        dispatch({
            type: 'LOADING',
            payload: true
        })
      await  Axios.get('https://jsonplaceholder.typicode.com/users')
            .then(({ data }) => {
                dispatch(getNameOnline(data));
            });
            dispatch({
                type: 'LOADING',
                payload: false
            })
    }
}
const getNameOnline = (data) => {
    return {
        type: 'CHANGE_NAME',
        payload: data
    }
}

export const deleteUser = (id) => {
    return {
        type: 'DELETE_USER',
        payload: id
    }
}

