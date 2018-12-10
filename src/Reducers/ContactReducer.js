import {
  NAME_UPDATE,
  EMAIL_UPDATE,
  SUBJECT_UPDATE,
  MESSAGE_UPDATE,
  ERROR,
  LOADING,
  FETCH_SUCCESS,
  FETCH_FAILURE
} from '../Actions/ContactActions/Action_Types';

const initialState = {
  form: {
    name: '',
    email: '',
    subject: '',
    message: ''
  },
  submitted: false,
  load: false,
  success: false,
  failure: false,
  error: false,
  errors: []
};

function ContactReducer(state = JSON.parse(JSON.stringify(initialState)), action) {
  switch (action.type) {
    case NAME_UPDATE: {
      const newState = Object.assign({}, state);
      newState.form.name = action.payload;
      return newState;
    }
    case EMAIL_UPDATE: {
      const newState = Object.assign({}, state);
      newState.form.email = action.payload;
      return newState;
    }
    case SUBJECT_UPDATE: {
      const newState = Object.assign({}, state);
      newState.form.subject = action.payload;
      return newState;
    }
    case MESSAGE_UPDATE: {
      const newState = Object.assign({}, state);
      newState.form.message = action.payload;
      return newState;
    }
    case ERROR:
      return Object.assign({}, state, {
            error: action.payload,
            errors: action.foundError
        });
    case LOADING:
      return Object.assign({}, state, {
            load: action.payload,
            error: action.payload_two
        });
    case FETCH_SUCCESS:
      return Object.assign({}, state, {
            success: action.payload
        });
    case FETCH_FAILURE:
      return Object.assign({}, state, {
            failure: action.payload
        });
    default:
      return state;
  }
}

export default ContactReducer;
