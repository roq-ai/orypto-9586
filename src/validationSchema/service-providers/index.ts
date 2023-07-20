import * as yup from 'yup';

export const serviceProviderValidationSchema = yup.object().shape({
  service_status: yup.string().required(),
  user_id: yup.string().nullable(),
});
