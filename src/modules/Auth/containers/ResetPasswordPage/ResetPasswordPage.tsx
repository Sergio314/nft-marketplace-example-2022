import * as React from 'react';
import { useRouter } from 'next/router';

import { paths } from '@/data/paths';
import { ResetPasswordForm } from '../../components/ResetPasswordForm';
import { actionSendResetPassword } from '../../actions';

import styles from './ResetPasswordPage.module.scss';

const ResetPasswordPage = (): JSX.Element => {
  const router = useRouter();

  const handleSubmit = async (values: any) => {
    try {
      const res = await actionSendResetPassword(values);
      if (res.data.success) {
        await router.push(paths.login);
      }
    } catch (error) {
      // Do nothing
    }
  };
  return (
    <div className={styles['reset-page-wrapper']}>
      <ResetPasswordForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default ResetPasswordPage;
