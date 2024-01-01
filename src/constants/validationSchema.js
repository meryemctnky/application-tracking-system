import * as yup from 'yup';

const validationSchema = yup.object().shape({
  firstName: yup.string().required('Ad alanı zorunludur'),
  lastName: yup.string().required('Soyad alanı zorunludur'),
  age: yup
    .number()
    .typeError('Yaş alanı sayı olmalıdır')
    .required('Yaş alanı zorunludur')
    .positive('Yaş alanı pozitif bir sayı olmalıdır')
    .integer('Yaş alanı tam sayı olmalıdır'),
  tc: yup
    .string()
    .required('TCKN alanı zorunludur')
    .matches(/^[0-9]{11}$/, 'TCKN sadece sayılardan oluşmalıdır')
    .min(11, 'TCKN 11 haneli olmalıdır')
    .max(11, 'TCKN 11 haneli olmalıdır'),
  reason: yup.string().required('Başvuru Nedeni zorunludur'),
  address: yup.string().required('Adres Bilgisi zorunludur'),
  file: yup.mixed().required('Resim yükleme zorunludur'),
});

export default validationSchema;
