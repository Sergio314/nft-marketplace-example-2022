import {Box} from "@mui/material";

import styles from "./Wrapper.module.scss";

interface IWrapper {
  children: React.ReactNode,
  customClass?: string
}

export const Wrapper = ({children, customClass}: IWrapper): JSX.Element => (
  <Box className={`${styles.wrapper} ${customClass}`}>
    {children}
  </Box>
);
