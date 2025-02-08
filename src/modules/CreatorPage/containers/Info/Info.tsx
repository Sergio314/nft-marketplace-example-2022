import {Box} from '@mui/material';

import {Button} from '@/shared/components/Button';
import {Wrapper} from '@/core/components/Wrapper';

import styles from './Info.module.scss';

export const Info = (): JSX.Element => {
  return (
    <Wrapper>
      <Box className={styles.info}>
        <div className={styles.info__user}>
          <div className={styles.info__user__fullName}>Fullname</div>
          <div className={styles.info__user__username}>@username</div>
        </div>
        <div className={styles.info__date}>
          Joined at `date`
        </div>
        <div className={styles.info__address}>
          <Button
            contained
            children='0x052...............'
          />
        </div>
      </Box>
    </Wrapper>
  );
};
