import { Box, Tab, Tabs, Typography } from '@mui/material';

import styles from './NotificationsDropdown.module.scss';
import { useState } from 'react';
import { Button } from '@/shared/components/Button';
import TabPanel from '@/shared/components/TabPanel/TabPanel';
import { NotificationItem } from '../NotificationItem';


export const NotificationsDropdown = () => {
  const [currentTab, setCurrentTab] = useState(0)

  const tabClickHandler = (index) => {
    setCurrentTab(index)
  }

  return (
    <Box className={styles.dropdown}>
      <Typography className={styles.dropdown__title}>
        Notifications
      </Typography>
      <Box className={styles.dropdown__tabs}>
        {
          ['Users', 'NFT'].map((title, index) => (
            <Button
              key={index}
              contained={index === currentTab}
              onClick={() => tabClickHandler(index)}
            >
              {title}
            </Button>
          ))
        }
      </Box>
      <Typography className={styles.dropdown__tabs_title}>
        New
      </Typography>
      <TabPanel
        value={currentTab}
        index={0}
      >
        <Box className={styles.dropdown__tabs_notifications}>
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
        </Box>
      </TabPanel>
      <TabPanel
        value={currentTab}
        index={1}
      >
        <Box className={styles.dropdown__tabs_notifications}>
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
        </Box>
      </TabPanel>
    </Box>
  )
}