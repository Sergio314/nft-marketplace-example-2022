import * as React from 'react';
import { useRouter } from 'next/router';

import { notify } from '@/shared/components/Notify/Notify';
import { LoginForm } from '../../components/LoginForm';
import { actionNativeLogin } from '../../actions';

import styles from './LoginPage.module.scss';

const LoginPage = (): JSX.Element => {
  const router = useRouter();
  const clientId = process.env.NEXT_PUBLIC_CLIENT_ID || '';

  const handleSubmit = async (values: any) => {
    try {
      await actionNativeLogin(values);
      router.push('/');
    } catch (error) {
      // Do nothing
    }
  };
  return (
    <div className={styles['login-page-wrapper']}>
      <LoginForm handleSubmit={handleSubmit} clientId={clientId} />
    </div>
  );
};

export default LoginPage;
