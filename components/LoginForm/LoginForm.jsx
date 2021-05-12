import React from 'react';
import {Field, Form, Formik} from "formik";
import signInSchema from "./login-form.schema";

const LoginForm = () => {
    const onSubmit = () => {

    }

    return (
        <Formik initialValues={{
            email: '',
            password: ''
        }} validationSchema={signInSchema} onSubmit={onSubmit}>
            <Form>
                <Field name="email" type="email"/>
                <Field name="password" type="password"/>
            </Form>
        </Formik>
    );
};

export default LoginForm;