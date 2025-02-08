import { useState } from 'react';
import { Badge, Button, IconButton, Menu } from '@mui/material'

import styles from './Notifications.module.scss';
import NotificationSvg from '@/resources/icons/notification.svg'
import { NotificationsDropdown } from '../NotificationsDropdown';

export const Notifications = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const isOpen = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Badge badgeContent={2} color='error'>
                <IconButton
                    className={styles.notifications__button}
                    onClick={handleClick}
                    color='info'
                >
                    <NotificationSvg />
                </IconButton>
            </Badge>
            <Menu
                anchorEl={anchorEl}
                open={isOpen}
                onClose={handleClose}
                classes={{ paper: styles.notifications__dropdown }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                }}
                disableScrollLock
            >
                <NotificationsDropdown />
            </Menu>
        </>
    )
}