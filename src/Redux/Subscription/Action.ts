import { Dispatch } from "redux";
import {
  GET_USER_SUBSCRIPTIONS_REQUEST,
  GET_USER_SUBSCRIPTIONS_SUCCESS,
  UPGRADE_SUBSCRIPTION_REQUEST,
  UPGRADE_SUBSCRIPTION_SUCCESS,
} from "./ActionTypes";
import api from "@/config/Api";

export const getUserSubscriptions = (jwt: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: GET_USER_SUBSCRIPTIONS_REQUEST,
    });
    try {
      const response = await api.get("/api/subscriptions/user", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({
        type: GET_USER_SUBSCRIPTIONS_SUCCESS,
        payload: response.data,
      });
      console.log("users subscriptions", response.data);
    } catch (error) {
      console.log(error);
    }
  };
};

export const upgradeSubscription = (playType: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: UPGRADE_SUBSCRIPTION_REQUEST,
    });

    try {
      const response = await api.post("/api/subscriptions/upgrade", null, {
        params: {
          planType: playType,
        },
      });

      dispatch({
        type: UPGRADE_SUBSCRIPTION_SUCCESS,
        payload: response.data,
      });
      console.log("upgrade subscription", response.data);
    } catch (error) {
      console.log(error);
    }
  };
};
