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
            setDoc(res?.data?.fileName)
        }).catch(error => {
            if (error.status === 401) {
                logout()
            }
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
            if (error.status === 401) {
                logout()
            }
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
                <Field className="marriage-contacts-input" type="text" placeholder="Полное Имя Мужа" name="fullNameOfTheHusband"/>
                <ErrorMessage className="form-error" component="p" name="fullNameOfTheHusband"/>
                <Field className="marriage-contacts-input" type="text" placeholder="Полное Имя Жены" name="WifeSFullName"/>
                <ErrorMessage className="form-error" component="p" name="WifeSFullName"/>
                <Field className="marriage-contacts-input" type="text" placeholder="Кем выдан паспорт" name="issuedBy"/>
                <Field className="marriage-contacts-input" type="text" placeholder="Паспорт" name="passport"/>
                <Field className="marriage-contacts-input" type="tel" placeholder="Телефон" name="phone"/>
                <Field className="marriage-contacts-input" type="email" placeholder="Email" name="email"/>
                <Field className="marriage-contacts-input" type="text" placholder="Дата свадьбы" name="weddingDate"/>
                <ErrorMessage className="form-error" component="p" name="weddingDate"/>
                <Field className="marriage-contacts-input" type="checkbox" placholder="Гражданин Украины ?" name="citizenOfUkraine"/>
                <Field className="marriage-contacts-input" type="checkbox" placholder="Были ранее женаты ?" name="wasPreviouslyMarried"/>
                <Field className="marriage-contacts-input" type="text" placholder="Дата рождения" name="dateOfBirth"/>
                <Field name="plan" as="select"  className="marriage-contacts-input">
                    <option value="BASIC">Базовый</option>
                    <option value="STANDARD">Стандарный</option>
                    <option value="PREMIUM">Премиум</option>
                </Field>
                <Field className="marriage-contacts-input" type="text" placeholder="Комментарий" name="comment"/>
                <input className="marriage-contacts-input" type="file" onChange={uploadDocument}/>
                <button className="btn _dark _long" type="submit">Відправити заявку</button>
            </Form>
        </Formik>
    );

}

export default ProfileForm;