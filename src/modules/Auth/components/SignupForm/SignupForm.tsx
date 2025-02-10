import * as React from 'react';
import { useCallback } from 'react';
import { useRouter } from 'next/router';
// import { signIn } from 'next-auth/react';
import { Form, Formik } from 'formik';

import { paths } from '@/data/paths';
import { Button } from '@/shared/components/Button';
import { Input } from '@/shared/components/Input';
import { validateSignup } from '@/modules/Auth/utils';
import { PasswordInput } from '../PasswordInput';
import { AuthPageProps } from '../../models';
import { ArrowButton } from '@/modules/CreateAvatarPage/components/ArrowButton';

import styles from './SignupForm.module.scss';

export const SignupForm: React.FC<AuthPageProps> = ({ handleSubmit }) => {
  const router = useRouter();

  const handleGoogle = () => /* signIn('google', { callbackUrl: '/' }); */ undefined

  const routeHandler = (route: string) => () => router.push(route);

  const handleBackButton = useCallback(() => {
    window.history.length > 2 ? router.back() : routeHandler('/');
  }, [window.history, router]);

  return (
    <div className={styles['signup-form']}>
      <Formik
        initialValues={{
          email: '',
          username: '',
          password: '',
          confirmPassword: '',
        }}
        onSubmit={handleSubmit}
        validate={validateSignup}
      >
        {({ handleSubmit, handleChange, isSubmitting, errors, values, handleBlur }) => (
          <Form onSubmit={handleSubmit} noValidate>
            <div className={styles['signup-form__card-body']}>
              <ArrowButton text='Back' onClick={handleBackButton} className={styles['signup-form__card-body__back']} />
              <div className={styles['signup-form__header']}>
                <h4 className={styles['signup-form__header-title']}>Registration</h4>
              </div>
              <Input
                type='text'
                placeholder='Enter Email'
                name='email'
                label='Email*'
                required
                id={styles['signup-form_email']}
                onChange={handleChange}
                value={values.email}
                onBlur={handleBlur}
                error={errors.email as string}
              />
              <Input
                type='text'
                label='Nickname*'
                name='username'
                placeholder='Enter Nickname'
                id={styles['signup-form_username']}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                required
                error={errors.username as string}
              />

              <PasswordInput
                name='password'
                placeholder='Enter Password'
                id='signup-form_password'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                required
                label='Password*'
                error={errors.password as string}
              />
              <PasswordInput
                name='confirmPassword'
                placeholder='Enter Password'
                id='signup-form_confirmPassword'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
                required
                label='Confirm Password*'
                error={errors.confirmPassword as string}
              />
              <div className={styles['signup-form__forgot-block']}>
                <div className={styles['forgot']}>
                  <div className={styles['forgot__link']} onClick={routeHandler(paths.forgotPassword)}>
                    Forgot Password?{' '}
                  </div>
                </div>
                <div className={styles['signup-form__sign-up-link']} onClick={routeHandler(paths.login)}>
                  Already have an account?
                </div>
              </div>
              <Button type='submit' contained disabled={isSubmitting} className={styles['signup-form__button']}>
                Sign up
              </Button>
              <Button type='button' className={styles['signup-form__button']} onClick={handleGoogle}>
                Sign in with Google
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default SignupForm;
