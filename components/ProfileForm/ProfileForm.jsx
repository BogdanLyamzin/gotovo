import React, {useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import axios from "axios";
import Cookie from 'js-cookie'
import useLogout from "../../auth/hooks/use-logout";

const ProfileForm = () => {
    const [doc, setDoc] = useState('');
    const logout = useLogout();
    const uploadDocument = (event) => {
        const data = new FormData()
        data.append('file', event.currentTarget.files[0]);
        axios.post(`https://cmusy-dev.space/api/v1/profile/upload`, data, {
            headers: {
                Authorization: `Bearer ${Cookie.get('accessToken')}`
            }
        }).then(res => {
            logout()
            setDoc(res?.data?.fileName)
        })
    }

    const createOrder = async (values) => {
        const order = {
            ...values,
            doc
        }
        try {
            await axios.post(`https://cmusy-dev.space/api/v1/orders`, order, {
                headers: {
                    Authorization: `Bearer ${Cookie.get('accessToken')}`
                }
            });
        } catch (error) {
            logout()
        }
    }

    return (
        <Formik initialValues={{
            fullNameOfTheHusband: "",
            WifeSFullName: "",
            issuedBy: "",
            passport: "",
            status: "NEW",
            phone: "",
            email: "",
            weddingDate: "",
            doc,
            citizenOfUkraine: true,
            wasPreviouslyMarried: true,
            dateOfBirth: "",
            plan: "BASIC",
            comment: "string",
        }} onSubmit={createOrder}>
            <Form>
                <Field type="text" placeholder="Полное Имя Мужа" name="fullNameOfTheHusband"/>
                <ErrorMessage name="fullNameOfTheHusband" />
                <Field type="text" placeholder="Полное Имя Жены" name="WifeSFullName"/>
                <ErrorMessage name="WifeSFullName" />
                <Field type="text" placeholder="Кем выдан паспорт" name="issuedBy"/>
                <Field type="text" placeholder="Паспорт" name="passport"/>
                <Field type="tel" placeholder="Телефон" name="phone"/>
                <Field type="email" placeholder="Email" name="email"/>
                <Field type="text" placholder="Дата свадьбы" name="weddingDate"/>
                <ErrorMessage name="weddingDate" />
                <Field type="checkbox" placholder="Гражданин Украины ?" name="citizenOfUkraine"/>
                <Field type="checkbox" placholder="Были ранее женаты ?" name="wasPreviouslyMarried"/>
                <Field type="text" placholder="Дата рождения" name="dateOfBirth"/>
                <Field name="plan" as="select">
                    <option value="BASIC">Базовый</option>
                    <option value="STANDARD">Стандарный</option>
                    <option value="PREMIUM">Премиум</option>
                </Field>
                <Field type="text" placeholder="Комментарий" name="comment"/>
                <input type="file" onChange={uploadDocument}/>
                <button type="submit">Отправить</button>
            </Form>
        </Formik>
    );

}

export default ProfileForm;