import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import useRegister from "../../auth/hooks/use-register";
import signUpSchema from "./register-form.schema";
// import Modal from "../../shared/components";
// import {ModalContent} from "../../shared/components/Modal/Modal";
// import useConfirm from "../../auth/hooks/use-confirm";

const RegisterForm = () => {
    const {register} = useRegister();
    // console.log(confirmToken)
    // const confirm = useConfirm();
    return (
        <>
            <Formik initialValues={{
                email: '',
                phone: '',
                fullName: '',
                password: '',
            }} validationSchema={signUpSchema} onSubmit={register}>
                <Form>
                    <Field name="email" placeholder="Email*" type="email"/>
                    <ErrorMessage name="email" />
                    <Field name="phone" placeholder="Phone*" type="tel"/>
                    <ErrorMessage name="phone" />
                    <Field name="fullName" placeholder="FullName*" type="text"/>
                    <ErrorMessage name="fullName" />
                    <Field name="password" placeholder="Password*" type="password"/>
                    <ErrorMessage name="password" />
                    <button type="submit">Register</button>
                </Form>
            </Formik>

            {/*<Modal open={!!confirmToken} onClose={closeModal}>*/}
            {/*    <ModalContent>*/}
            {/*        <Formik initialValues={{*/}
            {/*            confirmToken,*/}
            {/*            verificationCode: '',*/}
            {/*        }} onSubmit={confirm}>*/}
            {/*            <Form>*/}
            {/*                <Field name="verificationCode" type="text"/>*/}
            {/*                <button type="submit">Submit</button>*/}
            {/*            </Form>*/}
            {/*        </Formik>*/}
            {/*    </ModalContent>*/}
            {/*</Modal>*/}
        </>
    );
};

export default RegisterForm;