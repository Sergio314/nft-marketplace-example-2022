import { useRouter } from 'next/router';
import { Box } from '@mui/material';

import { Button } from '@/shared/components/Button';
import { Wrapper } from '@/core/components/Wrapper';
import SortDropdown from '@/shared/components/SortDropdown/SortDropdown';

import { sortDropdownOptions } from '@/data/sortDropdownOptions';

import styles from './Filter.module.scss';

const tabs = {
  locations: 'locations',
  experiences: 'experiences',
};

const Filter = (): JSX.Element => {
  const router = useRouter();
  const { tab } = router.query;

  const tabHandler = (currentTab: string) => () => {
    router.replace(
      {
        pathname: router.pathname,
        query: { ...router.query, tab: currentTab },
      },
      undefined,
      { scroll: false },
    );
  };

  return (
    <Wrapper>
      <Box className={styles.filter}>
        <div className={styles.filter__tabs}>
          <Button children="Locations" contained={tab === tabs.locations} onClick={tabHandler(tabs.locations)} />
          <Button children="Experiences" contained={tab === tabs.experiences} onClick={tabHandler(tabs.experiences)} />
        </div>
        <div className={styles.filter__sort}>
          <SortDropdown adaptive options={sortDropdownOptions} />
        </div>
      </Box>
    </Wrapper>
  );
};

export default Filter;
