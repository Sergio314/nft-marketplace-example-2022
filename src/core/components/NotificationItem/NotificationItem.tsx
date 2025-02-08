import { Box, Avatar } from '@mui/material';

import styles from './NotificationItem.module.scss';

export const NotificationItem = () => {
  return (
    <Box className={styles.notification}>
      <Avatar className={styles.notification__avatar}>
      </Avatar>
      <Box className={styles.notification__content}>
        Sergiy Rokhvarg called you to the guild
      </Box>
      <Box className={styles.notification__time}>
        1h ago
      </Box>
    </Box>
  )
}