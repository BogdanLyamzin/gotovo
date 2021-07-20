import React, {useState, useEffect} from "react";
import {ErrorMessage, Field, Form, Formik, useFormikContext, useField} from "formik";
import axios from "axios";
import Cookie from "js-cookie";
import profileFormSchema from "./profile-form.schema";

import useLogout from "../../auth/hooks/use-logout";
import Modal from "../../src/components/Modal";
import {ModalContent} from "../../src/components/Modal/Modal";
import dynamic from "next/dynamic";

// import Calendar from "../../src/components/Calendar";

const CalendarForm = dynamic(() => import("../FullCalendar/FullCalendar"), {
    ssr: false,
    loading: () => <p>Loading...</p>,
});

const ProfileForm = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [docs, setDoc] = useState("");
    const [successOrder, setSuccessOrder] = useState(false);
    const [openCalendar, setOpenCalendar] = useState(false);
    const logout = useLogout();

    const uploadDocument = (event) => {
        const data = new FormData();
        for(const file of event.currentTarget.files) {
            data.append("files", file);
        }
        console.log(data)
        axios
            .post(`https://cmusy-dev.space/api/v1/profile/upload/multiply`, data, {
                headers: {
                    Authorization: `Bearer ${Cookie.get("accessToken")}`,
                },
            })
            .then(({data}) => {
                console.log(data);
                setDoc(data);
            })
            .catch((error) => {
                if (error.status === 401) {
                    logout();
                }
            });
    };

    const createOrder = async (values) => {
        const order = {
            ...values,
            docs,
        };

        try {
            await axios.post(`https://cmusy-dev.space/api/v1/orders`, order, {
                headers: {
                    Authorization: `Bearer ${Cookie.get("accessToken")}`,
                },
            });
            setSuccessOrder(true);
            setIsModalOpen(true);
        } catch (error) {
            if (error.status === 401) {
                logout();
            }
        }
    };

    return (
        <>
            {!successOrder && (
                <Formik
                    initialValues={{
                        plan: "BASIC",
                        fullNameOfTheHusband: "",
                        wifeSFullName: "",
                        husbandPassport: "",
                        husbandIssuedBy: "",
                        wifePassport: "",
                        wifeIssuedBy: "",
                        dateOfBirth: "",
                        wifeDateOfBirth: "",
                        status: "NEW",
                        phone: "",
                        email: "",
                        weddingDate: '',
                        endWeddingDate: '',
                        citizenOfUkraine: true,
                        wasHusbandPreviouslyMarried: false,
                        wasWifePreviouslyMarried: false,
                        attitudeMilitary: "",
                        registeredPlace: "",
                        servicePlace: "",
                        militaryRank: "",
                        militaryDocument: "",
                        comment: "",
                        total: 0,
                        doc: "",
                        divorceDocumentHusband: "",
                        divorceDocumentWife: "",
                        docs,
                    }}
                    validationSchema={profileFormSchema}
                    onSubmit={createOrder}
                >
                    {({setFieldValue, values}) => (
                        <Form>
                            <label className="form-label">Оберіть пакет</label>
                            <Field
                                name="plan"
                                as="select"
                                className="text-field"
                            >
                                <option value="BASIC">Базовий</option>
                                <option value="STANDARD">Стандарт</option>
                                <option value="PREMIUM">Преміум</option>
                            </Field>
                            <Field
                                type="hidden"
                                name="total">
                                {(props)=> {
                                    const {values: {plan, weddingDate}, setFieldValue} = useFormikContext();
                                    const [field, meta] = useField(props);
                                    // console.log(weddingDate)
                                    useEffect(() => {
                                        let cost = 0;
                                        switch(plan) {
                                            case "BASIC":
                                                cost = 8776;
                                                break;
                                            case "STANDARD":
                                                cost = 11188;
                                                break;
                                            case "PREMIUM":
                                                cost = 15142;
                                                break;
                                        }
                                        setFieldValue(props.name, `${cost}`);
                                    }, [setFieldValue, props.name, plan]);
                                    return  <input {...props.field} type="hidden" />
                                }}
                            </Field>
                            <Field
                                className="text-field"
                                type="text"
                                placeholder="Повне ім'я чоловіка"
                                name="fullNameOfTheHusband"
                            />
                            <ErrorMessage
                                className="form-error"
                                component="p"
                                name="fullNameOfTheHusband"
                            />
                            <Field
                                className="text-field"
                                type="text"
                                placeholder="Повне ім'я жінки"
                                name="wifeSFullName"
                            />
                            <ErrorMessage
                                className="form-error"
                                component="p"
                                name="wifeSFullName"
                            />
                            <Field
                                className="text-field"
                                type="text"
                                placeholder="Номер паспорту чоловіка"
                                name="husbandPassport"
                            />
                            <ErrorMessage
                                className="form-error"
                                component="p"
                                name="husbandPassport"
                            />
                            <Field
                                className="text-field"
                                type="text"
                                placeholder="Де і ким виданний паспорт чоловіку"
                                name="husbandIssuedBy"
                            />
                            <ErrorMessage
                                className="form-error"
                                component="p"
                                name="husbandIssuedBy"
                            />
                            <Field
                                className="text-field"
                                type="text"
                                placeholder="Номер паспорту жінки"
                                name="wifePassport"
                            />
                            <ErrorMessage
                                className="form-error"
                                component="p"
                                name="wifePassport"
                            />
                            <Field
                                className="text-field"
                                type="text"
                                placeholder="Де і ким виданний паспорт жінці"
                                name="wifeIssuedBy"
                            />
                            <ErrorMessage
                                className="form-error"
                                component="p"
                                name="wifeIssuedBy"
                            />
                            <Field
                                className="text-field"
                                type="text"
                                placeholder="Дата народження чоловіка"
                                name="dateOfBirth"
                            />
                            <ErrorMessage
                                className="form-error"
                                component="p"
                                name="dateOfBirth"
                            />
                            <Field
                                className="text-field"
                                type="text"
                                placeholder="Дата народження жінки"
                                name="wifeDateOfBirth"
                            />
                            <ErrorMessage
                                className="form-error"
                                component="p"
                                name="wifeDateOfBirth"
                            />
                            <Field
                                className="text-field"
                                type="tel"
                                placeholder="Телефон"
                                name="phone"
                            />
                            <ErrorMessage
                                className="form-error"
                                component="p"
                                name="phone"
                            />
                            <Field
                                className="text-field"
                                type="email"
                                placeholder="Email"
                                name="email"
                            />
                            <ErrorMessage
                                className="form-error"
                                component="p"
                                name="email"
                            />
                            <span className="select-date" onClick={() => setOpenCalendar(true)}>
                Выбрать дату
              </span>
                            <ErrorMessage
                                className="form-error"
                                component="p"
                                name="weddingDate"
                            />
                            <div>
                                <label className="form-label" htmlFor="">
                                    Чоловік и жінка є громадянами України?
                                    <Field type="checkbox" name="citizenOfUkraine"/>
                                </label>
                            </div>
                            <div>
                                <label className="form-label" htmlFor="">
                                    Чи був чоловік раніше одружений?
                                    <Field type="checkbox" name="wasHusbandPreviouslyMarried"/>
                                </label>
                            </div>
                            <div>
                                <label className="form-label" htmlFor="">
                                    Чи був чоловік раніше одружений?
                                    <Field type="checkbox" name="wasWifePreviouslyMarried"/>
                                </label>
                            </div>
                            <Field
                                className="text-field"
                                type="text"
                                placeholder="Відношення до війскової служби"
                                name="attitudeMilitary"
                            />
                            <ErrorMessage
                                className="form-error"
                                component="p"
                                name="attitudeMilitary"
                            />
                            <Field
                                className="text-field"
                                type="text"
                                placeholder="Місто реєстрації"
                                name="registeredPlace"
                            />
                            <ErrorMessage
                                className="form-error"
                                component="p"
                                name="registeredPlace"
                            />
                            <Field
                                className="text-field"
                                type="text"
                                placeholder="Де проходив війскову службу"
                                name="servicePlace"
                            />
                            <ErrorMessage
                                className="form-error"
                                component="p"
                                name="servicePlace"
                            />
                            <Field
                                className="text-field"
                                type="text"
                                placeholder="Вйскове звання, якщо є"
                                name="militaryRank"
                            />
                            <ErrorMessage
                                className="form-error"
                                component="p"
                                name="militaryRank"
                            />
                            <Field
                                className="text-field"
                                type="text"
                                placeholder="Документ, що підтвержджує проходження віскової служби"
                                name="militaryDocument"
                            />
                            <ErrorMessage
                                className="form-error"
                                component="p"
                                name="militaryDocument"
                            />
                            <Field
                                className="text-field"
                                type="text"
                                placeholder="Коментар"
                                name="comment"
                            />
                            <input
                                className="text-field"
                                type="file"
                                multiple
                                onChange={uploadDocument}
                            />
                            <button className="btn _dark _long" type="submit">
                                Відправити заявку
                            </button>
                            <Modal
                                open={openCalendar}
                                onClose={() => setOpenCalendar(false)}
                                fullSize
                            >
                                {/*<Calendar />*/}
                                <CalendarForm
                                    setFieldValue={setFieldValue}
                                    value={values.weddingDate}
                                />
                            </Modal>
                        </Form>
                    )}
                </Formik>
            )}
            <Modal open={successOrder && isModalOpen} onClose={() => setIsModalOpen(false)}>
                <ModalContent>
                    <h2 className="title">Ваша заява успішно відправлена. </h2>
                </ModalContent>
            </Modal>
        </>
    );
};

export default ProfileForm;
