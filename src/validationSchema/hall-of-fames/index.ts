import * as yup from 'yup';

export const hallOfFameValidationSchema = yup.object().shape({
  description: yup.string().required(),
  user_id: yup.string().nullable(),
});
