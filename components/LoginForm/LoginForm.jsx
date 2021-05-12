import React from 'react';
import {Field, Form, Formik} from "formik";
import signInSchema from "./login-form.schema";
import useLogin from "../../auth/hooks/use-login";

const LoginForm = () => {
    const {login} = useLogin();

    return (
        <Formik initialValues={{
            email: '',
            password: ''
        }} validationSchema={signInSchema} onSubmit={login}>
            <Form>
                <Field name="email" type="email"/>
                <Field name="password" type="password"/>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};

export default LoginForm;