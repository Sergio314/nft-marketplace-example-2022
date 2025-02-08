import { FormikValues } from 'formik';
import { regex, validationMessages } from '@/data/validation';

export const validateSignup = (values: FormikValues) => {
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
  if (!values.username) {
    errors.username = validationMessages.required();
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = validationMessages.required();
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = validationMessages.confirmPassword();
  }

  return errors;
};

export const onActivationLinkClick = (email: string): void => {
  alert(`Email to ${email} has been successfully sent`);
};
