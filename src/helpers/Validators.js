import * as yup from "yup";

const mobileRegExp =
  /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/;

const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email format.").required("Required."),
  password: yup
    .string()
    .required("Required.")
    .min(6, "Password should atleast 6 char long."),
});

const forgotSchema = yup.object().shape({
  email: yup.string().email("Invalid email format.").required("Required."),
});

const registerSchema = yup.object().shape({
  email: yup.string().email("Invalid email format.").required("Required."),
  username: yup
    .string()
    .required("Required.")
    .min(4, "Username should atleast 4 char long."),
  password: yup
    .string()
    .required("Required.")
    .min(6, "Password should atleast 6 char long."),
  confirmPassword: yup
    .string()
    .required("Required.")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const resetSchema = yup.object().shape({
  password: yup
    .string()
    .required("Required.")
    .min(6, "Password should atleast 6 char long."),
  confirmPassword: yup
    .string()
    .required("Required.")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const editSchema = yup.object().shape({
  email: yup.string().email("Invalid email format.").required("Required."),
  username: yup
    .string()
    .required("Required.")
    .min(4, "Username should atleast 4 char long."),
  password: yup
    .string()
    .required("Required.")
    .min(6, "Password should atleast 6 char long."),
});

const mobileSchema = yup.object().shape({
  mobile: yup
    .string()
    .required("Required.")
    .matches(mobileRegExp, "Incorrect mobile format."),
  otp: yup
    .string()
    .required("Required.")
    .min(5, "Otp should atleast 5 char long."),
});

export {
  loginSchema,
  forgotSchema,
  registerSchema,
  resetSchema,
  editSchema,
  mobileSchema,
};
