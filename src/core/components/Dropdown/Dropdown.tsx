import { useState } from 'react';
import { useRouter } from 'next/router';

import { Box, Menu, MenuItem, Typography } from '@mui/material';
import ArrowSvg from '@/resources/icons/arrow.svg';
import Link from 'next/link';

import styles from './Dropdown.module.scss';

interface DropdownProps {
    title: string,
    options: string[]
}

export const Dropdown: React.FC<DropdownProps> = (props) => {
    const {
        title,
        options
    } = props
    const router = useRouter()

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
            <Box
                className={styles.dropdown__header}
                onClick={handleClick}
            >
                <Typography fontWeight={500}>{title}</Typography>
                <ArrowSvg />
            </Box>
            <Menu
                anchorEl={anchorEl}
                open={isOpen}
                onClose={handleClose}
                classes={{ paper: styles.dropdown__menu }}
                disableScrollLock
            >
                {
                    Object.keys(options).map((title, index) => (
                        <MenuItem
                            className={`${router.pathname == options[title] ? styles.dropdown__menu_item_active : styles.dropdown__menu_item}`}
                            onClick={handleClose}
                            key={index}
                        >
                            <Link href={options[title]}>
                                <Typography>
                                    {title}
                                </Typography>
                            </Link>
                        </MenuItem>
                    ))
                }
            </Menu>
        </>
    )
}
