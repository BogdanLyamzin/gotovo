import React from 'react';
import {Form} from "formik";

const ProfileForm = () => {
    return (
        <Formik initialValues={{
            fullNameOfTheHusband: "",
            WifeSFullNam: "",
            issuedBy: "",
            passport: "",
            status: "NEW",
            phone: "",
            email: "",
            weddingDate: "",
            doc: '',
            citizenOfUkraine: true,
            wasPreviouslyMarried: true,
            dateOfBirth: "",
            plan: "BASIC",
            comment: "string",
        }} onSubmit={() => null}>
            <Form>

            </Form>
        </Formik>
    );
};

export default ProfileForm;