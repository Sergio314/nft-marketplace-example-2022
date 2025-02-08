import { FormikValues } from 'formik';
import { validationMessages } from '@/data/validation';

export const validateAvatar = (values: FormikValues) => {
  const errors: any = {};

  if (!values.name) {
    errors.name = validationMessages.required();
  }
  // if (!values.description) {
  //   errors.description = validationMessages.required();
  // }
  if (!values.glbSource) {
    errors.glbSource = 'Your avatar is empty';
  }

  return errors;
};
