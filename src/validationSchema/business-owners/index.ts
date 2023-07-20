import * as yup from 'yup';

export const businessOwnerValidationSchema = yup.object().shape({
  product_service_status: yup.string().required(),
  user_id: yup.string().nullable(),
});
