import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import useRegister from "../../auth/hooks/use-register";
import signUpSchema from "./register-form.schema";
import Modal from "../../shared/components";
import {ModalContent} from "../../shared/components/Modal/Modal";
import useConfirm from "../../auth/hooks/use-confirm";

const RegisterForm = () => {
    const {register, closeModal, confirmToken} = useRegister();
    const confirm = useConfirm();
    return (
        <>
            <Formik initialValues={{
                email: '',
                phone: '',
                fullName: '',
                password: '',
            }} validationSchema={signUpSchema} onSubmit={register}>
                <Form>
                    <Field className="marriage-contacts-input" name="email" placeholder="Email*" type="email"/>
                    <ErrorMessage className="form-error" component="p" name="email"/>
                    <Field className="marriage-contacts-input" name="phone" placeholder="Phone*" type="tel"/>
                    <ErrorMessage className="form-error" component="p" name="phone"/>
                    <Field className="marriage-contacts-input" name="fullName" placeholder="FullName*" type="text"/>
                    <ErrorMessage className="form-error" component="p" name="fullName"/>
                    <Field className="marriage-contacts-input" name="password" placeholder="Password*" type="password"/>
                    <ErrorMessage className="form-error" component="p" name="password"/>
                    <button className="btn _dark _long" type="submit">Зараєструватися</button>
                </Form>
            </Formik>

            <Modal open={!!confirmToken} onClose={closeModal}>
                <ModalContent>
                    <Formik initialValues={{
                        confirmToken,
                        verificationCode: '',
                    }} onSubmit={confirm}>
                        <Form>
                            <Field name="verificationCode" type="text" className="marriage-contacts-input" placeholder="Код із листа" />
                            <button className="btn _dark _long" type="submit">Підтвердити</button>
                        </Form>
                    </Formik>
                </ModalContent>
            </Modal>
        </>
    );
};

export default RegisterForm;