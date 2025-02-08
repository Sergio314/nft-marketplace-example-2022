import * as React from 'react';
import { toast, ToastContainer } from 'react-toastify';

import styles from './Notify.module.scss';

interface INotifyMessage {
  message: string;
}

interface IIcon {
  [key: string]: JSX.Element;
}

export const notify = {
  error: (message: string) => toast.error(<Msg message={message} />),
  success: (message: string) => toast.success(<Msg message={message} />),
  warning: (message: string) => toast.warning(<Msg message={message} />),
  info: (message: string) => toast.info(<Msg message={message} />),
};

const Msg = ({ message }: INotifyMessage) => (
  <div className={styles['rc-toast-presentation']}>
    <div className={styles['rc-toast-message']}>{message}</div>
  </div>
);

export const NotificationContainer = () => {
  return (
    <ToastContainer
      position="top-left"
      hideProgressBar
      autoClose={3000}
      closeButton={false}
      newestOnTop
      closeOnClick={true}
      rtl={false}
      pauseOnFocusLoss
      draggable
    />
  );
};
