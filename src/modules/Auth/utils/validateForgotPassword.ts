import { FormikValues } from 'formik';
import { regex, validationMessages } from '@/data/validation';

export const validateForgotPassword = (values: FormikValues) => {
  const errors: any = {};

  if (!values.email) {
    errors.email = validationMessages.required();
  } else if (!regex.email.test(values.email)) {
    errors.email = validationMessages.email();
  }
  return errors;
};
