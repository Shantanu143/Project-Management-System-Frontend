/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch } from "redux";
import {
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  DELETE_COMMENT_REQUEST,
  DELETE_COMMENT_SUCCESS,
  FETCH_COMMENT_REQUEST,
  FETCH_COMMENT_SUCCESS,
} from "./ActionTypes";
import api from "@/config/Api";

export const createComment = (commentData: any) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: CREATE_COMMENT_REQUEST });

    try {
      const response = await api.post(`/api/comments`, commentData);
      console.log("comment created successfully", response.data);
      dispatch({
        type: CREATE_COMMENT_SUCCESS,
        comment: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteComment = (commentId: number) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: DELETE_COMMENT_REQUEST });

    try {
      await api.delete(`/api/comments/${commentId}`);

      dispatch({ type: DELETE_COMMENT_SUCCESS, commentId });
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchComments = (issueId: number) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: FETCH_COMMENT_REQUEST });
    try {
      const response = await api.get(`/api/comments/${issueId}`);
      dispatch({
        type: FETCH_COMMENT_SUCCESS,
        comments: response.data,
      });
      console.log("fetched comments", response.data);
    } catch (error) {
      console.log(error);
    }
  };
};
