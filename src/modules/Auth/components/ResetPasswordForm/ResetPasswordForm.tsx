import * as React from 'react';
import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { Form, Formik } from 'formik';

import { validateResetPassword } from '../../utils/validateResetPassword';
import { Button } from '@/shared/components/Button';
import { PasswordInput } from '../PasswordInput';
import { AuthPageProps } from '../../models';
import { ArrowButton } from '@/modules/CreateAvatarPage/components/ArrowButton';

import styles from './ResetPasswordForm.module.scss';

export const ResetPasswordForm: React.FC<AuthPageProps> = ({ handleSubmit }) => {
  const router = useRouter();
  const { token } = router.query;

  const handleBackButton = useCallback(() => {
    window.history.length > 2 ? router.back() : router.push('/');
  }, [window.history, router]);

  return (
    <div className={styles['rsp']}>
      <Formik
        enableReinitialize
        initialValues={{
          password: '',
          confirm: '',
          token: token,
        }}
        onSubmit={handleSubmit}
        validate={validateResetPassword}
      >
        {({ handleSubmit, handleChange, isSubmitting, errors, values, handleBlur }) => (
          <Form onSubmit={handleSubmit} noValidate>
            <div className={styles['rsp__card-body']}>
              <ArrowButton text='Back' onClick={handleBackButton} className={styles['rsp__card-body__back']} />

              <div className={styles['rsp__header']}>
                <h4 className={styles['rsp__header-title']}>Reset Password</h4>
              </div>
              <PasswordInput
                name='password'
                placeholder='Enter Password'
                id='rsp_password'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                required
                label='New Password'
                error={errors.password as string}
              />
              <PasswordInput
                name='confirm'
                placeholder='Enter Password'
                id='rsp_confirmPassword'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirm}
                required
                label='Confirm Password'
                error={errors.confirm as string}
              />
              <Button contained type='submit' disabled={isSubmitting} className={styles['rsp__button']}>
                Save
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default ResetPasswordForm;
