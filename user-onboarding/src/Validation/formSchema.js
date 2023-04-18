import * as yup from "yup";

const formSchema = yup.object().shape({
    fname: yup.string().trim().required("First Name is required"),
    lname: yup.string().trim().required("Last Name is required"),
    email: yup.string().email("Must be a valid email address").required("Email is required"),
    password: yup.string().trim().required("Password is required").min(8, 'Password must be at least 8 characters'),
    terms: yup.boolean().oneOf([true], "Terms of Service is required")
})

export default formSchema;