import {Box} from '@mui/material';

import {Wrapper} from '@/core/components/Wrapper';
import PublicPageLayout from '@/core/layouts/PublicPageLayout';
import DetailsSection from './сontainers/DetailsSection/DetailsSection';
import ExploreSection from './сontainers/ExploreSection/ExploreSection';
import PageBreadcrumbs from './сomponents/PageBreadcrumbs/PageBreadcrumbs';

import styles from './NFTDetailsPage.module.scss';

const NFTDetailsPage = (): JSX.Element => {
  return (
    <PublicPageLayout withoutWrapper>
      <Box className={styles.nftDetails}>
        <Wrapper>
          <PageBreadcrumbs/>
          <DetailsSection/>
          <ExploreSection/>
        </Wrapper>
      </Box>
    </PublicPageLayout>
  );
};

export default NFTDetailsPage;

