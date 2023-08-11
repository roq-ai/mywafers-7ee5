import * as yup from 'yup';

export const blogValidationSchema = yup.object().shape({
  content: yup.string().required(),
  user_id: yup.string().nullable(),
});
