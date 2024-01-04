import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string().email('Geçerli bir email adresi girin.').required('Email adı zorunludur.'),
  password: yup
    .string()
    .required('Şifre zorunludur.')
    .min(8, 'Şifre en az 8 karakter olmalıdır.')
    .matches(/^(?=.*\d)/, 'Şifre en az bir rakam içermelidir.'),
});
