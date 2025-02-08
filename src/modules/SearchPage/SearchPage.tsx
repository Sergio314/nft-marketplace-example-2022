import {Banner} from './containers/Banner';
import {Result} from './containers/Result';
import PublicPageLayout from '@/core/layouts/PublicPageLayout';

export const SearchPage = (): JSX.Element => {
  return (
    <PublicPageLayout withoutWrapper>
      <Banner/>
      <Result/>
    </PublicPageLayout>
  );
};
