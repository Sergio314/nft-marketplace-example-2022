import PublicPageLayout from '@/core/layouts/PublicPageLayout';
import { Banner } from './containers/Banner';
import { Filter } from './containers/Filter';
import { Grid } from './containers/Grid';

export const NFTListingsPage = (): JSX.Element => {
  return (
    <PublicPageLayout withoutWrapper>
      <Banner />
      <Filter />
      <Grid />
    </PublicPageLayout>
  );
};
