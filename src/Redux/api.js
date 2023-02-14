import axios from "axios";
import { error, start, success } from "./UserSlice"

export const addUserWithApi = async (user, dispatch) => {
    dispatch(start());
    try {
        const { data } = await axios.post("http://localhost:5000/api/users", user)
        dispatch(success(data));

    }
    catch {
       
        dispatch(error())
    }
}