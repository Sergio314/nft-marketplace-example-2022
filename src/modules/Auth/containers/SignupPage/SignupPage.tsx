import * as React from 'react';
import { useRouter } from 'next/router';

import { paths } from '@/data/paths';
import { notify } from '@/shared/components/Notify/Notify';

import { SignupForm } from '../../components/SignupForm';
import { actionNativeSignup } from '../../actions';

import styles from './SignupPage.module.scss';

const SignupPage = (): JSX.Element => {
  const router = useRouter();
  const handleSubmit = async (values: any) => {
    try {
      await actionNativeSignup(values);
      await router.push(paths.login);
      notify.success('Successfully registered. Check your email for verification.');
    } catch (error) {
            // Do nothing

    }
  };
  return (
    <div className={styles['signup-page-wrapper']}>
      <SignupForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default SignupPage;
