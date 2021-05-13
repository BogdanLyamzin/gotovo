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
                <Field className="marriage-contacts-input" name="email" type="email"/>
                <Field className="marriage-contacts-input" name="password" type="password"/>
                <button className="btn _dark _long" type="submit">Увійти</button>
            </Form>
        </Formik>
    );
};

export default LoginForm;