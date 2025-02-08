import { Button } from '@/shared/components/Button';
import { Input } from '@/shared/components/Input';
import { Box, Typography } from '@mui/material';

import styles from './Support.module.scss';

export const Support = () => {

  return (
    <Box id="support" className={styles.support}>
      <Typography className={styles.support__title}>
        Get in touch with us
      </Typography>
      <Box className={styles.support__fields}>
        <Input
          type='text'
          placeholder='Enter Email'
          label='Email*'
        />
        <Input
          type='text'
          placeholder='Enter Mobile'
          label='Mobile'
        />
        <Input
          type='text'
          placeholder='Enter'
          multiline
          maxRows={4}
          label='Message'
        />
      </Box>
      <Button contained>
        Send Message
      </Button>
    </Box>
  )
}