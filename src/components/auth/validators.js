const validateUsername = (username) => {
  let errors = {};
  if (!username) {
    errors.username = "Required";
  } else if (/[^\d\w]/.test(username)) {
    errors.username = "Special characters are not allowed ";
  }
  return errors;
};

const validatePassword = (password) => {
  let errors = {};
  if (!password) {
    errors.password = "Required";
  } else if (password.length < 6) {
    errors.password = "Password must have at least 6 characters";
  }
  return errors;
};

const validatePhone = (phone) => {
  let errors = {};
  if (!phone) {
    errors.phone = "Required";
  } else if (
    !/(^(056|058|059|03[2-9]|09[0-4]|09[6-9]|08[1-9]|070|07[6-9])){1}[0-9]{7}$/g.test(
      phone
    )
  ) {
    errors.phone = "Invalid phone number";
  }
  return errors;
};

const validator = {
  username: validateUsername,
  password: validatePassword,
  phone: validatePhone,
};

const validateData = (data) => {
  const errors = Object.keys(data).reduce((error, field) => {
    return { ...error, ...validator[field](data[field]) };
  }, {});
  return {
    errors,
  };
};
export default validateData;
