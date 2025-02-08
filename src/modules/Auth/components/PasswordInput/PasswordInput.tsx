import * as React from 'react';
import { useReducer } from 'react';
import { FormLabel, IconButton, InputAdornment, TextField } from '@mui/material';
import { Box } from '@mui/system';

import EyeOpened from '@/resources/icons/password-eye-opened.svg';
import EyeClosed from '@/resources/icons/password-eye-closed.svg';

import styles from './PasswordInput.module.scss';

export interface PasswordInputProps {
  placeholder: string;
  onChange?: any;
  value?: string;
  onBlur?: any | undefined;
  name?: string;
  id?: string;
  required?: boolean;
  label?: string;
  error?: string;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({ placeholder, label, id, name, required, value, error, onChange, ...p }) => {
  const [isPassword, toggle] = useReducer((is) => !is, false);
  return (
    <Box className={styles.input}>
      <FormLabel className={styles.input__label} htmlFor={id}>
        {label}
      </FormLabel>
      <TextField
        id={id}
        variant="outlined"
        autoComplete="off"
        hiddenLabel
        name={name}
        onChange={onChange}
        type={!isPassword ? 'password' : 'text'}
        helperText={error}
        error={Boolean(error)}
        className={styles.input__field}
        value={value}
        placeholder={placeholder}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility" onClick={toggle} edge="end">
                {!isPassword ? <EyeClosed /> : <EyeOpened />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        inputProps={{
          form: {
            autocomplete: 'off',
          },
        }}
        {...p}
      />
    </Box>
  );
};
