import { useRouter } from 'next/router';
import { Box } from '@mui/material';

import { Button } from '@/shared/components/Button';
import { Wrapper } from '@/core/components/Wrapper';
import SortDropdown from '@/shared/components/SortDropdown/SortDropdown';

import { sortDropdownOptions } from '@/data/sortDropdownOptions';

import styles from './Filter.module.scss';

const tabs = {
  all: 'All',
  avatar: 'Avatars',
  experience: 'Experiences',
  locations: 'Locations',
};

export const Filter = (): JSX.Element => {
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
          {Object.keys(tabs).map((key) => (
            <Button key={key} contained={tab === key} onClick={tabHandler(key)}>
              {tabs[key]}
            </Button>
          ))}
        </div>
        <div className={styles.filter__sort}>
          <SortDropdown adaptive options={sortDropdownOptions} />
        </div>
      </Box>
    </Wrapper>
  );
};
