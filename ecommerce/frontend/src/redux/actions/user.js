import axios from "axios"
import { server } from "../../server";

// load user
export const loadUser = () => async(dispatch) => {
    try{
        dispatch({
            type: "LoadUserRequest",
        });
        const {data} = await axios.get(`${server}/user/getUser`, {withCredentials: true});
        dispatch({
            type: "LoadUserSuccess",
            payload: data.user,
        });
    }catch(err){
        dispatch({
            type: "LoadUserFail",
            payload: err.response.data.message,
        })
    }
}