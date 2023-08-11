import * as yup from 'yup';

export const birthdayValidationSchema = yup.object().shape({
  date: yup.date().required(),
  user_id: yup.string().nullable(),
});
