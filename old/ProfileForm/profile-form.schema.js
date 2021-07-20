import * as Yup from "yup";

const profileFormSchema = Yup.object().shape({
    fullNameOfTheHusband: Yup.string().required('Поле обязательное!'),
    wifeSFullName: Yup.string().required('Поле обязательное!'),
    husbandPassport: Yup.string().required(),
    husbandIssuedBy: Yup.string().required(),
    wifePassport: Yup.string().required(),
    wifeIssuedBy: Yup.string().required(),
    dateOfBirth: Yup.string().required(),
    wifeDateOfBirth: Yup.string().required(),
    status: Yup.string().required(),
    phone: Yup.string().required(),
    email: Yup.string().email("Введите валидный email!"),
    // weddingDate: Yup.string().required('Поле обязательное!'),
    citizenOfUkraine: Yup.bool().notRequired(),
    wasHusbandPreviouslyMarried: Yup.bool().notRequired(),
    wasWifePreviouslyMarried: Yup.bool().notRequired(),
    attitudeMilitary: Yup.string().required(),
    registeredPlace: Yup.string().notRequired(),
    servicePlace: Yup.string().notRequired(),
    militaryRank: Yup.string().notRequired(),
    militaryDocument: Yup.string().notRequired(),
    plan: Yup.string().required(),
    comment: Yup.string().notRequired(),
    docs: Yup.string().notRequired(),
});

export default profileFormSchema;