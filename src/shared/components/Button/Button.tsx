import { Button as MuiButton, ButtonProps as MuiButtonProps, Typography } from '@mui/material';

import styles from './Button.module.scss';

interface ButtonProps extends MuiButtonProps {
  contained?: boolean;
}

export const Button = (props: ButtonProps): JSX.Element => {
  const { onClick, children, contained, className, ...rest } = props;

  return (
    <MuiButton className={`${contained ? styles.button__contained : styles.button} ${className}`} onClick={onClick} {...rest}>
      <Typography className={styles.button__text}>
        {children}
      </Typography>
    </MuiButton>
  );
};
