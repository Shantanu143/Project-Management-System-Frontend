import { Dispatch } from "redux";
import {
  FETCH_CHAT_BY_PROJECT_REQUEST,
  FETCH_CHAT_BY_PROJECT_SUCCESS,
  FETCH_CHAT_MESSAGES_REQUEST,
  FETCH_CHAT_MESSAGES_SUCCESS,
  SEND_MESSAGES_SUCCESS,
} from "./ActionTypes";
import api from "@/config/Api";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sendMessage = (messageData: any) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: SEND_MESSAGES_SUCCESS });

    try {
      const response = await api.post("/api/messages/send", messageData);
      dispatch({ type: SEND_MESSAGES_SUCCESS, message: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchChatByProject = (projectId: number) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: FETCH_CHAT_BY_PROJECT_REQUEST });
    try {
      const response = await api.get(`/api/projects/${projectId}/chat`);

      console.log("fetch chat by project", response.data);
      dispatch({ type: FETCH_CHAT_BY_PROJECT_SUCCESS, chat: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchChatMessages = (chatId: number) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: FETCH_CHAT_MESSAGES_REQUEST });
    try {
      const response = await api.get(`/api/messages/chat/${chatId}`);
      console.log("fetch chat messages", response.data);

      dispatch({
        type: FETCH_CHAT_MESSAGES_SUCCESS,
        chatId,
        messages: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
