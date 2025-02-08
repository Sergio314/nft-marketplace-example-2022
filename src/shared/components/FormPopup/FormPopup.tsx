import * as React from 'react';
import { Box } from '@mui/material';
import Modal from '@mui/material/Modal';
import { Typography } from '@mui/material';
import { Button } from '@/shared/components/Button';
import CloseIcon from '@/resources/icons/close-modal-icon.svg';

import styles from './FormPopup.module.scss';

interface FormPopupProps {
  headerText: string;
  coreText: string;
  buttonText: string;
  isModalOpen: boolean;
  onButtonClick?: () => any;
  handleClose?: any;
  isCloseIcon?: boolean;
}

export const FormPopup: React.FC<FormPopupProps> = ({
  handleClose,
  headerText,
  coreText,
  buttonText,
  onButtonClick,
  isModalOpen,
  isCloseIcon = false,
}) => {
  return (
    <Modal open={isModalOpen} onClose={handleClose} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
      <Box className={styles.Popup}>
        <div className={styles.Popup__header}>
          {isCloseIcon && <CloseIcon className={styles.Popup__close} />}
          <Typography fontSize={32} fontWeight={400}>
            {headerText}
          </Typography>
        </div>
        <Typography fontSize={16} fontWeight={500} className={styles['Popup__core-text']}>
          {coreText}
        </Typography>

        <Button className={styles['Popup__button']} type='button' onClick={onButtonClick} contained>
          {buttonText}
        </Button>
      </Box>
    </Modal>
  );
};
