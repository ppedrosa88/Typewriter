import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const userSchemaRegister = yup.object().shape({
    name: yup.string().required("Name is required"),
    surname: yup.string(),
    email: yup.string().email("Enter a valid email").required("Email is required"),
    password: yup.string().min(8, "Password should be of minimum 8 characters length").matches(passwordRules, { message: 'Please create a stronger password' }).required("Password is required"),
    repeatPassword: yup.string().oneOf([yup.ref("password")], "Passwords must match").required('Repeat password is required'),
    // termsNConditions: yup.boolean().oneOf([true], "You must accept the terms and conditions")
})


