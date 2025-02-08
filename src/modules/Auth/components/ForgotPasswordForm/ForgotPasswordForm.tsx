import * as React from 'react';
import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { Form, Formik } from 'formik';

import { Button } from '@/shared/components/Button';
import { Input } from '@/shared/components/Input';
import { validateForgotPassword } from '../../utils';
import { AuthPageProps } from '../../models';
import { ArrowButton } from '@/modules/CreateAvatarPage/components/ArrowButton';

import styles from './ForgotPassword.module.scss';

export const ForgotPasswordForm: React.FC<AuthPageProps> = ({ handleSubmit }) => {
  const router = useRouter();

  const handleBackButton = useCallback(() => {
    window.history.length > 2 ? router.back() : router.push('/');
  }, [window.history, router]);

  return (
    <div className={styles['fgp']}>
      <Formik
        initialValues={{
          email: '',
        }}
        onSubmit={handleSubmit}
        validate={validateForgotPassword}
      >
        {({ handleSubmit, handleChange, isSubmitting, errors, values, handleBlur }) => (
          <Form onSubmit={handleSubmit} noValidate>
            <div className={styles['fgp__card-body']}>
              <ArrowButton text='Back' onClick={handleBackButton} className={styles['fgp__card-body__back']} />
              <div className={styles['fgp__header']}>
                <h4 className={styles['fgp__header-title']}>Forgot Password</h4>
              </div>
              <div className={`${styles['fgp__email']} ${styles['fgp__email_margin_top']}`}>
                <Input
                  type='text'
                  placeholder='Enter Email'
                  name='email'
                  required
                  id={styles['fgp_email']}
                  onChange={handleChange}
                  value={values.email}
                  onBlur={handleBlur}
                  label='Email'
                  error={errors.email as string}
                />
              </div>
              <Button disabled={isSubmitting} className={styles['fgp__button']} contained type='submit'>
                Send code
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default ForgotPasswordForm;
