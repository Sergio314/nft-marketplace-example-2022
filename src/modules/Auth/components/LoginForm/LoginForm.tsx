import * as React from 'react';
import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { Form, Formik } from 'formik';
// import { signIn } from 'next-auth/react';

import { Button } from '@/shared/components/Button';
import { Input } from '@/shared/components/Input';
import { validateLogin } from '@/modules/Auth/utils';
import { paths } from '@/data/paths';

import { PasswordInput } from '../PasswordInput';
import { AuthPageProps } from '../../models';

import { ArrowButton } from '@/modules/CreateAvatarPage/components/ArrowButton';
import styles from './LoginForm.module.scss';

export const LoginForm: React.FC<AuthPageProps> = ({ handleSubmit, clientId }) => {
  const router = useRouter();
  const handleGoogle = () => undefined/* signIn('google', { callbackUrl: '/' }); */

  const routeHandler = (route: string) => () => router.push(route);

  const handleBackButton = useCallback(() => {
    window.history.length > 2 ? router.back() : routeHandler('/');
  }, [window.history, router]);

  return (
    <div className={styles['login-form']}>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
        validate={validateLogin}
      >
        {({ handleSubmit, handleChange, isSubmitting, errors, values, handleBlur }) => (
          <Form onSubmit={handleSubmit} noValidate>
            <div className={styles['login-form__card-body']}>
              <ArrowButton text='Back' onClick={handleBackButton} className={styles['login-form__card-body__back']} />

              <div className={styles['login-form__header']}>
                <h4 className={styles['login-form__header-title']}>Sign In</h4>
              </div>
              <Input
                type='text'
                placeholder='Enter Email'
                name='email'
                required
                id={styles['login-form_email']}
                onChange={handleChange}
                value={values.email}
                onBlur={handleBlur}
                label='Email'
                error={errors.email as string}
              />
              <PasswordInput
                name='password'
                placeholder='Enter Password'
                id={styles['login-form_password']}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                required
                label='Password'
                error={errors.password as string}
              />
              <div className={styles['login-form__forgot-block']}>
                <div className={styles['forgot']}>
                  <div className={styles['forgot__link']} onClick={routeHandler(paths.forgotPassword)}>
                    Forgot Password?{' '}
                  </div>
                </div>
                <div className={styles['login-form__sign-up-link']} onClick={routeHandler(paths.signUp)}>
                  Not registered yet?
                </div>
              </div>
              <Button type='submit' disabled={isSubmitting} contained className={styles['login-form__button']}>
                Sign in
              </Button>
              <Button type='button' className={styles['login-form__button']} onClick={handleGoogle}>
                Sign in with Google
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default LoginForm;
