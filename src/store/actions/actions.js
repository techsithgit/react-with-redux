export const loading = () => {
  return {
    type: "LOADING"
  };
};

export const ageUpAsnc = value => {
  return { type: "AGE_UP", value };
};

export const ageUp = value => {
  return dispatch => {
    dispatch(loading());
    setTimeout(() => {
      dispatch(ageUpAsnc(value));
    }, 5000);
  };
};

export const ageDown = value => {
  return { type: "AGE_DOWN", value };
};
