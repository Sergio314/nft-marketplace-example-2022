import { FormikValues } from 'formik';
import { regex, validationMessages } from '@/data/validation';

export const validateResetPassword = (values: FormikValues) => {
  const errors: any = {};

  if (!values.password) {
    errors.password = validationMessages.required();
  } else if (!regex.password.test(values.password)) {
    errors.password = validationMessages.password();
  }
  if (!values.confirm) {
    errors.confirm = validationMessages.required();
  } else if (values.confirm !== values.password) {
    errors.confirm = validationMessages.confirmPassword();
  }
  return errors;
};
