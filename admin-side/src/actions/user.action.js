import Axios from "../Axios";
import { LoginConstant, registerationConstant } from "./constant";

export const registeration = (user) => {
    console.log(user);
    return async (dispatch) => {
        dispatch({ type: registerationConstant.USER_RESISTERATATION_REQUEST });

        // dipatch actions
        const res = await Axios.post(`signup`, {
            ...user
        });
        if (res.status === 201) {
            // just take the data from front-end

            const { message } = res.data;

            dispatch({
                type: registerationConstant.USER_RESISTERATATION_SUCCESS,
                payload: {
                    message
                }
            })

        } else {
            if (res.status === 400) {
                dispatch({
                    type: registerationConstant.USER_RESISTERATATION_FAILURE,
                    payload: { error: res.data.error }
                })
            }
        }
        return res;
    }
}

