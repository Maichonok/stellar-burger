import * as actions from "../actions/authentication";
import { User } from "../models/authentication";

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  FORGOT_PASS_REQUEST,
  FORGOT_PASS_SUCCESS,
  FORGOT_PASS_FAILURE,
  RESET_PASS_REQUEST,
  RESET_PASS_SUCCESS,
  RESET_PASS_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  SAVE_USER_REQUEST,
  SAVE_USER_SUCCESS,
  SAVE_USER_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  SET_RECOVERY_EMAIL,
  UNSET_RECOVERY_EMAIL,
  SET_USER,
  RESET_USER,
} from "../actions/authentication";

export type AuthState = Readonly<{
  recoveryEmail: string;
  user: User;
  defaultUser: User;
  loading: boolean;
  showButtons: boolean;
}>;

const INITIAL_STATE: AuthState = {
  recoveryEmail: "",
  user: {
    email: "",
    password: "",
    name: "",
  },
  defaultUser: {
    email: "",
    password: "",
    name: "",
  },
  loading: false,
  showButtons: false,
};

const userDetails = (state = INITIAL_STATE, action: actions.TUser) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }
    case REGISTER_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case REGISTER_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }
    case FORGOT_PASS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case FORGOT_PASS_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case FORGOT_PASS_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }
    case RESET_PASS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case RESET_PASS_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case RESET_PASS_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }
    case FETCH_USER_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        user: {
          ...state.user,
          ...action.payload.user,
        },
        defaultUser: {
          ...state.user,
          ...action.payload.user,
        },
      };
    }
    case FETCH_USER_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }
    case SET_USER: {
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
        showButtons: true,
      };
    }
    case SAVE_USER_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case SAVE_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        defaultUser: {
          ...state.user,
          ...action.payload,
        },
        showButtons: false,
      };
    }
    case SAVE_USER_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }
    case RESET_USER: {
      return {
        ...state,
        user: { ...state.defaultUser },
        showButtons: false,
      };
    }
    case LOGOUT_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...INITIAL_STATE,
      };
    }
    case LOGOUT_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }
    case SET_RECOVERY_EMAIL: {
      return {
        ...state,
        recoveryEmail: action.payload,
      };
    }
    case UNSET_RECOVERY_EMAIL: {
      return {
        ...state,
        recoveryEmail: "",
      };
    }
    default: {
      return state;
    }
  }
};

export default userDetails;
