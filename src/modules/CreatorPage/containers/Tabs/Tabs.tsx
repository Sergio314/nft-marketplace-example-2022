import {useCallback} from 'react';
import {useRouter} from 'next/router';
import {Tab, Tabs as MuiTabs, Box} from '@mui/material';

import {Wrapper} from '@/core/components/Wrapper';
import Grid from '../../components/Grid/Grid';
import TabPanel from '@/shared/components/TabPanel/TabPanel';

import styles from './Tabs.module.scss';

const tabs = {
  avatars: 'avatars',
  experiences: 'experiences',
  locations: 'locations'
};

export const Tabs = (): JSX.Element => {
  const router = useRouter();
  const { tab = tabs.avatars } = router.query;

  const handleChange = useCallback((event: React.SyntheticEvent, newValue: number) => {
    router.replace(
      {
        pathname: router.pathname,
        query: {...router.query, tab: newValue},
      },
      undefined,
      {scroll: false},
    );
  }, []);

  return (
    <Wrapper>
      <Box className={styles.tabs}>
        <MuiTabs
          centered
          value={tab}
          onChange={handleChange}
          className={styles.tabs__labels}
        >
          <Tab value={tabs.avatars} label='Avatars (20)' className={styles.tabs__labels_item}/>
          <Tab value={tabs.experiences} label='Experiences (16)' className={styles.tabs__labels_item}/>
          <Tab value={tabs.locations} label='Locations (13)' className={styles.tabs__labels_item}/>
        </MuiTabs>
        <TabPanel index={tabs.avatars} value={tab} children={<Grid/>}/>
        <TabPanel index={tabs.experiences} value={tab} children={<Grid/>}/>
        <TabPanel index={tabs.locations} value={tab} children={<Grid/>}/>
      </Box>
    </Wrapper>
  );
};
