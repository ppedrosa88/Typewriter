import * as yup from "yup";

export const userSchemaLogin = yup.object().shape({
    email: yup.string().email("Enter a valid email").required("Email is required"),
    password: yup.string().required("Password is required"),
})
