import {
  GET_USER_SUBSCRIPTIONS_FAILURE,
  GET_USER_SUBSCRIPTIONS_REQUEST,
  GET_USER_SUBSCRIPTIONS_SUCCESS,
  UPGRADE_SUBSCRIPTION_FAILURE,
  UPGRADE_SUBSCRIPTION_REQUEST,
  UPGRADE_SUBSCRIPTION_SUCCESS,
} from "./ActionTypes";

const initialState = {
  userSubscription: null,
  loading: false,
  error: null,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const subscriptionReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_USER_SUBSCRIPTIONS_REQUEST:
    case UPGRADE_SUBSCRIPTION_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case GET_USER_SUBSCRIPTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        userSubscription: action.payload,
        error: null,
      };
    case UPGRADE_SUBSCRIPTION_SUCCESS:
      return {
        ...state,
        userSubscription: action.payload,
        loading: false,
        error: null,
      };
    case GET_USER_SUBSCRIPTIONS_FAILURE:
    case UPGRADE_SUBSCRIPTION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      state;
  }
};

export default subscriptionReducer;
