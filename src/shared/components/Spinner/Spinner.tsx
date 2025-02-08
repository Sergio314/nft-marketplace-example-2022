import {Box} from '@mui/material';

import SpinnerIcon from '@/resources/icons/spinner.svg';

import styles from './Spinner.module.scss';

interface SpinnerProps {
  size?: number;
}

export const Spinner = ({size = 90}: SpinnerProps): JSX.Element => {
  return (
    <Box className={styles.spinner}>
      <SpinnerIcon width={size} height={size}/>
    </Box>
  );
};
