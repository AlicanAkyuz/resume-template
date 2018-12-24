import validator from 'validator';
import {
  NAME_UPDATE,
  EMAIL_UPDATE,
  SUBJECT_UPDATE,
  MESSAGE_UPDATE,
  ERROR,
  LOADING,
  FETCH_SUCCESS,
  FETCH_FAILURE,
} from './Action_Types';


export function onNameUpdated(name) {
  return function (dispatch) {
    dispatch({
        type: NAME_UPDATE,
        payload: name
    })
  }
};

export function onEmailUpdated(email) {
  return function (dispatch) {
    dispatch({
        type: EMAIL_UPDATE,
        payload: email
    })
  }
};

export function onSubjectUpdated(subject) {
  return function (dispatch) {
    dispatch({
        type: SUBJECT_UPDATE,
        payload: subject
    })
  }
};

export function onMessageUpdated(message) {
  return function (dispatch) {
    dispatch({
        type: MESSAGE_UPDATE,
        payload: message
    })
  }
};

export function validateForm() {
  return function (dispatch, getState) {
    const possibleErrors = [];
    if (validator.isEmpty(getState().form.name)) {
      possibleErrors.push(1)
    };
    if (!validator.isEmail(getState().form.email)) {
      possibleErrors.push(2)
    };
    if (validator.isEmpty(getState().form.email)) {
      possibleErrors.push(3)
    };
    if (validator.isEmpty(getState().form.subject)) {
      possibleErrors.push(4)
    };
    if (validator.isEmpty(getState().form.message)) {
      possibleErrors.push(5)
    };
    possibleErrors.length > 0 ? dispatch(onError(possibleErrors)) : dispatch(fetchStart());
  };
};

export function onError(foundError) {
  return function (dispatch) {
    dispatch({
        type: ERROR,
        payload: true,
        foundError: foundError
    });
  };
};

export function fetchStart() {
  return function (dispatch, getState) {
    const data = {
      name: getState().form.name,
      email: getState().form.email,
      subject: getState().form.subject,
      message: getState().form.message
    };
    dispatch(onLoading());
    fetch('http://alicanakyuz.tech/contact', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.ok) {
        dispatch(onFetchSuccess());
        console.log('Success:', JSON.stringify(res.json()));
      } else {
        dispatch(onFetchFailure());
      }
    })
    .catch(error => {
      dispatch(onFetchFailure());
      console.error('Error:', error)
    });
  };
};

export function onLoading() {
  return function (dispatch) {
    dispatch({
        type: LOADING,
        payload: true,
        payload_two: false
    })
  }
};

export function onFetchSuccess() {
  return function (dispatch) {
    dispatch({
        type: FETCH_SUCCESS,
        payload: true,
    })
  }
};

export function onFetchFailure() {
  return function (dispatch) {
    dispatch({
        type: FETCH_FAILURE,
        payload: true,
    })
  }
};
