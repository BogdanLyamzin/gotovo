import * as Yup from "yup";

const profileFormSchema = Yup.object().shape({
    email: Yup.string()
        .email("Введите валидный email!"),
    fullNameOfTheHusband: Yup.string().required('Поле обязательное!'),
    WifeSFullName: Yup.string().required('Поле обязательное!'),
    issuedBy: Yup.string().notRequired(),
    passport: Yup.string().notRequired(),
    status: Yup.string().notRequired(),
    phone: Yup.string().notRequired(),
    weddingDate: Yup.string().required('Поле обязательное!'),
    doc: Yup.string().notRequired(),
    citizenOfUkraine: Yup.bool.notRequired(),
    wasPreviouslyMarried: Yup.bool.notRequired(),
    dateOfBirth: Yup.string().notRequired(),
    plan: Yup.string().notRequired(),
    comment: Yup.string().notRequired(),
});

export default profileFormSchema;