import { FormikValues } from 'formik';
import { regex, validationMessages } from '@/data/validation';

export const validateLogin = (values: FormikValues) => {
  const errors: any = {};

  if (!values.email) {
    errors.email = validationMessages.required();
  } else if (!regex.email.test(values.email)) {
    errors.email = validationMessages.email();
  }
  if (!values.password) {
    errors.password = validationMessages.required();
  } else if (!regex.password.test(values.password)) {
    errors.password = validationMessages.password();
  }

  return errors;
};
