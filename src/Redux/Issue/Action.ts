import { Dispatch } from "redux";
import {
  ASSIGNED_ISSUE_TO_USER_REQUEST,
  ASSIGNED_ISSUE_TO_USER_SUCCESS,
  FETCH_ISSUE_BY_ID_REQUEST,
  FETCH_ISSUE_BY_ID_SUCCESS,
  FETCH_ISSUE_REQUEST,
  FETCH_ISSUE_SUCCESS,
  UPDATE_ISSUE_STATUS_REQUEST,
  UPDATE_ISSUE_STATUS_SUCCESS,
} from "./ActionTypes";
import api from "@/config/Api";

export const fetchIssues = (id: number) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: FETCH_ISSUE_REQUEST });
    try {
      const response = await api.get(`/api/issues/${id}`);
      console.log("fetch issues", response.data);
      dispatch({
        type: FETCH_ISSUE_SUCCESS,
        issues: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchIssueById = (id: number) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: FETCH_ISSUE_BY_ID_REQUEST });

    try {
      const response = await api.get(`/api/issues/${id}`);
      console.log("fetch issue by id", response.data);
      dispatch({
        type: FETCH_ISSUE_BY_ID_SUCCESS,
        issue: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateIssueStatus = (id: number, status: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: UPDATE_ISSUE_STATUS_REQUEST,
    });

    try {
      const response = await api.put(`/api/issues/${id}/status/${status}`);
      console.log("update issue status", response.data);

      dispatch({
        type: UPDATE_ISSUE_STATUS_SUCCESS,
        issues: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const assignedIssueToUser = (id: number, userId: number) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: ASSIGNED_ISSUE_TO_USER_REQUEST });

    try {
      const response = await api.put(`/api/issues/${id}/assignee/${userId}`);

      console.log("assigned issue to user", response.data);

      dispatch({
        type: ASSIGNED_ISSUE_TO_USER_SUCCESS,
        issue: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
