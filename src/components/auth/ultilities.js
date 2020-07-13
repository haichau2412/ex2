export const initialValues = {
  login: {
    username: "",
    password: "",
  },
  signup: {
    username: "",
    password: "",
    phone: "",
  },
};

export const valueStandard = {
  signup: [
    {
      type: "text",
      name: "username",
      placeholder: "username",
    },
    {
      type: "password",
      name: "password",
      placeholder: "password",
    },
    {
      type: "text",
      name: "phone",
      placeholder: "phone",
    },
  ],
  login: [
    {
      type: "text",
      name: "username",
      placeholder: "username",
    },
    {
      type: "password",
      name: "password",
      placeholder: "password",
    },
  ],
};

export const title = {
  login: "Log in",
  signup: "Sign up",
};

export const buttonText = {
  login: "Log in",
  signup: "Sign up",
};
