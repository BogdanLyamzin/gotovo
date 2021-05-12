import * as Yup from "yup";

const profileFormSchema = Yup.object().shape({
    email: Yup.string()
        .required("Поле обязательное!")
        .email("Введите валидный email!"),
});

export default profileFormSchema;