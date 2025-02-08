import PublicPageLayout from '@/core/layouts/PublicPageLayout';
import { FaqSection } from './FaqSection';
import { Banner } from './Banner';

export const FaqPage = (): JSX.Element => {
  return (
    <PublicPageLayout withoutWrapper>
      <Banner />
      <FaqSection />
    </PublicPageLayout>
  );
};
