import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const formSchemas = yup.object().shape({
    email:yup
    .string()
    .email('Geçerli bir email giriniz!')
    .required('Email adresi giriniz!'),
    password:yup
    .string()
    .min(5,'En az 5 karakter içermesi gerekiyor')
    .matches(passwordRules,"Lütfen 1 büyük 1 küçük 1 de sayı olucak şekilde değer giriniz")
    .required('Lütfen şifrenizi giriniz'),
});

export const blogSchemas = yup.object().shape({
    category: yup
        .string()
        .matches("","Lütfen kategori seçiniz")
        .required('Lütfen kategori seçiniz'),
    name: yup
        .string()
        .min(5,'En az 5 karakter içermesi gerekiyor')
        .required('Lütfen başlık giriniz'),
    photo: yup
        .mixed()
        .required('Fotoğraf seçmek zorunlu')
});
