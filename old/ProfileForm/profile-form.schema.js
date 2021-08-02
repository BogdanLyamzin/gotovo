import * as Yup from "yup";

const requiredField = {
    ua: "Поле обов'язкове",
    ru: "Поле обязательное",
    en: "Field required"
}

const createProfileSchema = (locale) => {
    const requiredText = requiredField[locale];
    const profileFormSchema = Yup.object().shape({
        fullNameOfTheHusband: Yup.string().notRequired(requiredText),
        wifeSFullName: Yup.string().notRequired(requiredText),
        husbandPassport: Yup.string().length(6).notRequired(),
        husbandIssuedBy: Yup.string().notRequired(requiredText),
        wifePassport: Yup.string().notRequired(),
        wifeIssuedBy: Yup.string().notRequired(requiredText),
        dateOfBirth: Yup.string().notRequired(requiredText),
        wifeDateOfBirth: Yup.string().notRequired(requiredText),
        status: Yup.string().notRequired(requiredText),
        phone: Yup.string().notRequired(requiredText),
        email: Yup.string().email("Введите валидный email!"),
        weddingDate: Yup.string().required('Поле обязательное!'),
        endWeddingDate: Yup.string().required('Поле обязательное!'),
        citizenOfUkraine: Yup.bool().notRequired(requiredText),
        wasHusbandPreviouslyMarried: Yup.bool().notRequired(),
        wasWifePreviouslyMarried: Yup.bool().notRequired(),
        attitudeMilitary: Yup.string().required(),
        registeredPlace: Yup.string().notRequired(),
        servicePlace: Yup.string().notRequired(),
        militaryRank: Yup.string().notRequired(),
        militaryDocument: Yup.string().notRequired(),
        plan: Yup.string().notRequired(requiredText),
        comment: Yup.string().notRequired(),
        docs: Yup.string().notRequired(),
    });

    return profileFormSchema;
}



export default createProfileSchema;