/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./ActionTypes";
import { API_BASE_URL } from "@/config/Api";

interface UserData {
  email: string;
  password: string;
  username: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const register = (userData: UserData) => async (dispatch: any) => {
  dispatch({ type: REGISTER_REQUEST });
  try {
    const { data } = await axios.post(`${API_BASE_URL}/auth/signup`, userData);

    if (data.jwt) {
      localStorage.setItem("jwt", data.jwt);
      dispatch({ type: REGISTER_SUCCESS, payload: data });
    }

    console.log("Register Success: ", data);
  } catch (error) {
    console.log(error);
  }
};

export const login = (userData: UserData) => async (dispatch: any) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const { data } = await axios.post(`${API_BASE_URL}/auth/signin`, userData);

    if (data.jwt) {
      localStorage.setItem("jwt", data.jwt);
      dispatch({ type: LOGIN_SUCCESS, payload: data });
    }

    console.log("Login Success: ", data);
  } catch (error) {
    console.log(error);
  }
};

export const getUser = () => async (dispatch: any) => {
  dispatch({ type: GET_USER_REQUEST });
  try {
    const { data } = await axios.get(`${API_BASE_URL}/api/users/profile`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    });

    if (data.jwt) {
      localStorage.setItem("jwt", data.jwt);
      dispatch({ type: GET_USER_SUCCESS, payload: data });
    }

    console.log("Login Success: ", data);
  } catch (error) {
    console.log(error);
  }
};
export const logout = () => async (dispatch: (arg0: { type: string; }) => void) => {
  dispatch({ type: LOGOUT });
  localStorage.clear();
};
