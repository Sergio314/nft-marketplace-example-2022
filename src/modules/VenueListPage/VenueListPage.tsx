import PublicPageLayout from '@/core/layouts/PublicPageLayout';

import { Banner } from './containers/Banner/Banner';
import { VenuesList } from './containers/VenuesList';

export const VenueListPage = () => {
  return (
    <PublicPageLayout withoutWrapper>
      <Banner />
      <VenuesList />
    </PublicPageLayout>
  );
};
