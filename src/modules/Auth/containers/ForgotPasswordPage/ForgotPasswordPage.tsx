import * as React from 'react';
import { useState, useCallback } from 'react';
import { useRouter } from 'next/router';

import { actionSendForgotPassword } from '../../actions';
import { ForgotPasswordForm } from '../../components/ForgotPasswordForm';
import { FormPopup } from '@/shared/components/FormPopup';

import styles from './ForgotPasswordPage.module.scss';
import { paths } from '@/data/paths';

const ForgotPasswordPage = (): JSX.Element => {
  const router = useRouter();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleSubmit = async (values: any, { resetForm }: any) => {
    try {
      const res = await actionSendForgotPassword(values);
      if (res.data.success) {
        resetForm();
        setModalOpen(true);
      } else {
        resetForm();
        setModalOpen(false);
      }
    } catch (error) {
      // Do nothing
    }
  };
  const handleModalBTNClick = useCallback(() => router.push(paths.login), []);

  return (
    <div className={styles['forgot-page-wrapper']}>
      <ForgotPasswordForm handleSubmit={handleSubmit} />
      <FormPopup
        headerText='Success!'
        coreText='An email has been sent to your email address with a link to reset your password.'
        buttonText='OK'
        isModalOpen={isModalOpen}
        handleClose={setModalOpen}
        onButtonClick={handleModalBTNClick}
        isCloseIcon
      />
    </div>
  );
};

export default ForgotPasswordPage;
