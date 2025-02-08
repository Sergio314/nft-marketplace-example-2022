import { Button as MuiButton, ButtonProps as MuiButtonProps, Typography } from '@mui/material';

import GradientArrowLeftSvg from '@/resources/icons/breadcrumbs-button-left-arrow.svg';

import styles from './ArrowButton.module.scss';

interface ArrowButtonProps extends MuiButtonProps {
  text: string;
  href?: string;
}

export const ArrowButton = (props: ArrowButtonProps): JSX.Element => {
  const { children, className, text, href, onClick, ...rest } = props;

  return (
    <MuiButton
      variant='text'
      className={`${styles.button} ${className}`}
      href={!onClick ? href : undefined}
      startIcon={<GradientArrowLeftSvg />}
      onClick={onClick}
      {...rest}
    >
      <Typography fontSize={18} fontWeight={700}>
        {text}
      </Typography>
    </MuiButton>
  );
};
