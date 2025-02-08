import { useState } from 'react';
import { Tabs as MuiTabs, Tab } from '@mui/material';

import Owners from './Owners/Owners';
import History from './History/History';
import Details from './Details/Details';
import TabPanel from '@/shared/components/TabPanel/TabPanel';

import styles from './Tabs.module.scss';

const Tabs = (): JSX.Element => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={styles.tabs}>
      <MuiTabs value={value} onChange={handleChange} className={styles.tabs__labels}>
        <Tab label='Details' className={styles.tabs__labels_item} />
        <Tab label='History' className={styles.tabs__labels_item} />
      </MuiTabs>
      <TabPanel index={1} value={value} children={<Details />} />
      <TabPanel index={2} value={value} children={<History />} />
    </div>
  );
};

export default Tabs;
