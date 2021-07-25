import {ErrorMessage, Field, Form, Formik} from "formik";
import useRegister from "../../auth/hooks/use-register";
import signUpSchema from "./register-form.schema";
import Modal from "../../src/components/Modal";
import {ModalContent} from "../../src/components/Modal/Modal";
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
                    <Field className="text-field" name="email" placeholder="Email*" type="email"/>
                    <ErrorMessage className="form-error" component="p" name="email"/>
                    <Field className="text-field" name="phone" placeholder="Phone*" type="tel"/>
                    <ErrorMessage className="form-error" component="p" name="phone"/>
                    <Field className="text-field" name="fullName" placeholder="FullName*" type="text"/>
                    <ErrorMessage className="form-error" component="p" name="fullName"/>
                    <Field className="text-field" name="password" placeholder="Password*" type="password"/>
                    <ErrorMessage className="form-error" component="p" name="password"/>
                    <button className="btn _dark _long" type="submit">Зараєструватися</button>
                    <a href="https://cmusy-dev.space/api/v1/auth/accounts/facebook">Facebook</a>
                    <a href="https://cmusy-dev.space/api/v1/auth/accounts/google">Google</a>
                </Form>
            </Formik>

            <Modal open={!!confirmToken} onClose={closeModal}>
                <ModalContent>
                    <Formik initialValues={{
                        confirmToken,
                        verificationCode: '',
                    }} onSubmit={confirm}>
                        <Form>
                            <Field name="verificationCode" type="text" className="text-field" placeholder="Код із листа" />
                            <button className="btn _dark _long" type="submit">Підтвердити</button>
                        </Form>
                    </Formik>
                </ModalContent>
            </Modal>
        </>
    );
};

export default RegisterForm;