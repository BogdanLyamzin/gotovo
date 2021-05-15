import React, { useState} from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import axios from "axios";
import Cookie from "js-cookie";

import useLogout from "../../auth/hooks/use-logout";
import Modal from "../../shared/components";
import { ModalContent } from "../../shared/components/Modal/Modal";
import dynamic from "next/dynamic";

const CalendarForm = dynamic(() => import("../FullCalendar/FullCalendar"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const ProfileForm = () => {
  const [doc, setDoc] = useState("");
  const [successOrder, setSuccessOrder] = useState(false);
  const [openCalendar, setOpenCalendar] = useState();
  const logout = useLogout();



  const uploadDocument = (event) => {
    const data = new FormData();
    data.append("file", event.currentTarget.files[0]);
    axios
      .post(`https://cmusy-dev.space/api/v1/profile/upload`, data, {
        headers: {
          Authorization: `Bearer ${Cookie.get("accessToken")}`,
        },
      })
      .then(({ data }) => {
        setDoc(data.fileName);
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
      doc,
    };
    try {
      await axios.post(`https://cmusy-dev.space/api/v1/orders`, order, {
        headers: {
          Authorization: `Bearer ${Cookie.get("accessToken")}`,
        },
      });
      setSuccessOrder(true);
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
            fullNameOfTheHusband: "",
            WifeSFullName: "",
            issuedBy: "",
            passport: "",
            status: "NEW",
            phone: "",
            email: "",
            weddingDate: '',
            doc,
            citizenOfUkraine: true,
            wasPreviouslyMarried: true,
            dateOfBirth: "",
            plan: "BASIC",
            comment: "string",
          }}
          onSubmit={createOrder}
        >
          {({ setFieldValue, values }) => (
            <Form>
              <Field
                className="marriage-contacts-input"
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
                className="marriage-contacts-input"
                type="text"
                placeholder="Повне ім'я жінки"
                name="WifeSFullName"
              />
              <ErrorMessage
                className="form-error"
                component="p"
                name="WifeSFullName"
              />
              <Field
                className="marriage-contacts-input"
                type="text"
                placeholder="Ким виданий паспорт"
                name="issuedBy"
              />
              <Field
                className="marriage-contacts-input"
                type="text"
                placeholder="Номер паспорту"
                name="passport"
              />
              <Field
                className="marriage-contacts-input"
                type="tel"
                placeholder="Телефон"
                name="phone"
              />
              <Field
                className="marriage-contacts-input"
                type="email"
                placeholder="Email"
                name="email"
              />
              <button onClick={() => setOpenCalendar(true)}>
                Выбрать дату
              </button>
              <ErrorMessage
                className="form-error"
                component="p"
                name="weddingDate"
              />
              <div>
                <label htmlFor="">
                  Чоловік и жінка є громадянами України?
                  <Field type="checkbox" name="citizenOfUkraine" />
                </label>
              </div>
              <div>
                <label htmlFor="">
                  Чи був хто небудь із вас раніше одружений?
                  <Field type="checkbox" name="wasPreviouslyMarried" />
                </label>
              </div>
              <Field
                className="marriage-contacts-input"
                type="text"
                placholder="Дата нарождення"
                name="dateOfBirth"
              />
              <Field
                name="plan"
                as="select"
                className="marriage-contacts-input"
              >
                <option value="BASIC">Базовий</option>
                <option value="STANDARD">Стандартний</option>
                <option value="PREMIUM">Преміум</option>
              </Field>
              <Field
                className="marriage-contacts-input"
                type="text"
                placeholder="Коментар"
                name="comment"
              />
              <input
                className="marriage-contacts-input"
                type="file"
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
                <CalendarForm
                  setFieldValue={setFieldValue}
                  value={values.weddingDate}
                />
              </Modal>
            </Form>
          )}
        </Formik>
      )}
      <Modal open={successOrder}>
        <ModalContent>
          <h2 className="title">Ваша заява успішно відправлена. </h2>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileForm;
