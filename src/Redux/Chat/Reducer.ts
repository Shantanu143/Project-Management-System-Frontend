import {
  FETCH_CHAT_BY_PROJECT_SUCCESS,
  FETCH_CHAT_MESSAGES_FAILURE,
  FETCH_CHAT_MESSAGES_REQUEST,
  FETCH_CHAT_MESSAGES_SUCCESS,
  FETCH_MESSAGES_FAILURE,
  FETCH_MESSAGES_REQUEST,
  FETCH_MESSAGES_SUCCESS,
  SEND_MESSAGES_FAILURE,
  SEND_MESSAGES_REQUEST,
  SEND_MESSAGES_SUCCESS,
} from "./ActionTypes";

const initialState = {
  messages: [],
  loading: false,
  error: null,
  chat: null,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const chatReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_MESSAGES_REQUEST:
    case SEND_MESSAGES_REQUEST:
    case FETCH_CHAT_MESSAGES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_MESSAGES_SUCCESS:
    case FETCH_CHAT_MESSAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        messages: action.messages,
      };

    case SEND_MESSAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        messages: [...state.messages, action.messages],
      };

    case FETCH_CHAT_BY_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        chat: action.chat,
      };

    case FETCH_MESSAGES_FAILURE:
    case SEND_MESSAGES_FAILURE:
    case FETCH_CHAT_MESSAGES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      state;
  }
};
export default chatReducer;
