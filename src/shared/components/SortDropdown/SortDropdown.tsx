import { useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Menu, MenuItem } from '@mui/material';

import { Button } from '../Button';

import ArrowIcon from '@/resources/icons/arrow.svg';
import CheckIcon from '@/resources/icons/check-gradient.svg';

import styles from './SortDropdown.module.scss';

interface SortDropdownOptionProps {
  label: string;
  value: string;
}

interface SortDropdownProps {
  queryName?: string;
  options: SortDropdownOptionProps[];
  adaptive?: boolean;
}

const SortDropdown = ({ options, queryName = 'sort', adaptive = false }: SortDropdownProps): JSX.Element => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const sortHandler = (value: any) => () => {
    router.replace(
      {
        pathname: router.pathname,
        query: { ...router.query, [queryName]: value },
      },
      undefined,
      { scroll: false },
    );
    handleClose();
  };

  return (
    <Box className={`${styles.sortDropdown} ${adaptive ? styles.adaptive : ''}`}>
      <Button onClick={handleClick} className={styles.sortDropdown__button}>
        Sort by
        <span className={styles.sortDropdown__button_icon}>
          <ArrowIcon />
        </span>
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        classes={{
          paper: styles.sortDropdown__menu,
        }}
      >
        {options?.map((option, index) => {
          const isActive = router.query[queryName] === option.value;

          return (
            <MenuItem
              key={index}
              onClick={sortHandler(option.value)}
              className={`${styles.sortDropdown__menu_item} ${isActive ? styles.sortDropdown__menu_item_active : ''}`}
            >
              {option.label}
              {isActive && (
                <span className={styles.sortDropdown__menu_item__icon}>
                  <CheckIcon />
                </span>
              )}
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
};

export default SortDropdown;
