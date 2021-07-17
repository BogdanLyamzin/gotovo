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
                <Field className="text-field" name="email" placeholder="Email*" type="email"/>
                <Field className="text-field" name="password" placeholder="Password*" type="password"/>
                <button className="btn _dark _long" type="submit">Увійти</button>
            </Form>
        </Formik>
    );
};

export default LoginForm;