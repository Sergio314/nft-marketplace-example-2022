import * as React from 'react';
import { FormikHelpers } from 'formik';

export interface AuthPageProps {
  /**
   * function that is called on form submit
   */
  handleSubmit: (values: any, formikHelpers: FormikHelpers<any>) => void | Promise<void>;
  /**
   * clientId for auth with Google
   */
  clientId?: string;
}
