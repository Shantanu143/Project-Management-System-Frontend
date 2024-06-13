import api from "@/config/Api";
import { Dispatch } from "redux";
import {
  ACCEPT_INVITATION_PROJECT_REQUEST,
  CREATE_PROJECT_REQUEST,
  CREATE_PROJECT_SUCCESS,
  DELETE_PROJECT_REQUEST,
  DELETE_PROJECT_SUCCESS,
  FETCH_PROJECT_BY_ID_REQUEST,
  FETCH_PROJECT_BY_ID_SUCCESS,
  FETCH_PROJECTS_REQUEST,
  FETCH_PROJECTS_SUCCESS,
  INVITE_TO_PROJECT_REQUEST,
  INVITE_TO_PROJECT_SUCCESS,
  SEARCH_PROJECT_REQUEST,
  SEARCH_PROJECT_SUCCESS,
} from "./ActionTypes";

export const fetchProjects =
  ({ category, tag }: { category: string; tag: string }) =>
  async (dispatch: Dispatch) => {
    dispatch({ type: FETCH_PROJECTS_REQUEST });
    try {
      const { data } = await api.get("/api/projects", {
        params: { category, tag },
      });
      console.log("all projects : ", data);
      dispatch({ type: FETCH_PROJECTS_SUCCESS, project: data });
    } catch (error) {
      console.log(error);
    }
  };

export const searchProjects =
  (keyword: string) => async (dispatch: Dispatch) => {
    dispatch({ type: SEARCH_PROJECT_REQUEST });
    try {
      const { data } = await api.get("/api/projects/search?keyword=" + keyword);
      console.log("search project : ", data);
      dispatch({ type: SEARCH_PROJECT_SUCCESS, project: data });
    } catch (error) {
      console.log(error);
    }
  };

export const createProjects =
  (projectData: string[]) => async (dispatch: Dispatch) => {
    dispatch({ type: CREATE_PROJECT_REQUEST });
    try {
      const { data } = await api.post("/api/projects" + projectData);
      console.log("project created : ", data);
      dispatch({ type: CREATE_PROJECT_SUCCESS, project: data });
    } catch (error) {
      console.log(error);
    }
  };

export const fetchProjectById = (id: number) => async (dispatch: Dispatch) => {
  dispatch({ type: FETCH_PROJECT_BY_ID_REQUEST });
  try {
    const { data } = await api.get("/api/projects" + id);
    console.log("project : ", data);
    dispatch({ type: FETCH_PROJECT_BY_ID_SUCCESS, project: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProject =
  ({ projectId }: { projectId: number }) =>
  async (dispatch: Dispatch) => {
    dispatch({ type: DELETE_PROJECT_REQUEST });
    try {
      const { data } = await api.delete("/api/projects" + projectId);
      console.log("project deleted: ", data);
      dispatch({ type: DELETE_PROJECT_SUCCESS, projectId });
    } catch (error) {
      console.log(error);
    }
  };

export const inviteToProject =
  ({ email, projectId }: { email: string; projectId: number }) =>
  async (dispatch: Dispatch) => {
    dispatch({ type: INVITE_TO_PROJECT_REQUEST });
    try {
      const { data } = await api.post("/api/projects/invite", {
        email,
        projectId,
      });
      console.log("invite project: ", data);
      dispatch({ type: INVITE_TO_PROJECT_SUCCESS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

export const acceptToProject =
  ({
    invitationToken,
    navigate,
  }: {
    invitationToken: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    navigate: any;
  }) =>
  async (dispatch: Dispatch) => {
    dispatch({ type: ACCEPT_INVITATION_PROJECT_REQUEST });
    try {
      const { data } = await api.get("/api/projects/accept_invitation", {
        params: { token: invitationToken },
      });
      navigate(data.projectId);
      console.log("Accept invitation: ", data);
      dispatch({ type: INVITE_TO_PROJECT_SUCCESS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
