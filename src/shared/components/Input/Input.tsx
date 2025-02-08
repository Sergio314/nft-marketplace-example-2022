import * as React from 'react';
import { FormLabel, TextField } from '@mui/material';
import { Box } from '@mui/system';

import styles from './Input.module.scss';

export interface InputProps {
  placeholder: string;
  type: string;
  onChange?: any;
  value?: string;
  onBlur?: any | undefined;
  name?: string;
  id?: string;
  required?: boolean;
  label?: string;
  error?: string;
  multiline?: boolean;
  maxRows?: number;
}

export const Input = (props: InputProps): JSX.Element => {
  const { placeholder, value, type, label, id, error, multiline, maxRows, ...p } = props;

  return (
    <Box className={styles.input}>
      <FormLabel className={styles.input__label}>{label}</FormLabel>
      <TextField
        variant='outlined'
        autoComplete='off'
        hiddenLabel
        type={type}
        helperText={error}
        error={Boolean(error)}
        className={styles.input__field}
        value={value}
        placeholder={placeholder}
        multiline={multiline}
        maxRows={maxRows}
        id={id}
        {...p}
      />
    </Box>
  );
};
