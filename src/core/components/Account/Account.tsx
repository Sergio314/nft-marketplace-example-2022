import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Menu, MenuItem } from '@mui/material'
import styles from './Account.module.scss'

import AccountInfo from '@/resources/icons/account-info.svg';
import AccountSettings from '@/resources/icons/account-settings.svg';
import AccountLogout from '@/resources/icons/account-logout.svg';
import { actionNativeLogout } from '@/modules/Auth/actions';

export const Account = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorEl);
  const dispatch = useDispatch();

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }

  const handleInfoClick = () => {}

  const handleSettingsClick = () => {}

  const handleLogoutClick = () => dispatch(actionNativeLogout() as any);

  return (
    <>
      <Box className={styles.account} onClick={handleOpen}>
        {/* Place Avatar image here*/}
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        classes={{ paper: styles.account__dropdown }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        disableScrollLock
      >
        <MenuItem className={styles.account__dropdown_item} onClick={handleInfoClick}>
          <AccountInfo /> Account Info
        </MenuItem>
        <MenuItem className={styles.account__dropdown_item} onClick={handleSettingsClick}>
          <AccountSettings /> Settings
        </MenuItem>
        <MenuItem className={styles.account__dropdown_item} onClick={handleLogoutClick}>
          <AccountLogout /> Logout
        </MenuItem>
      </Menu>
    </>
  )
}
