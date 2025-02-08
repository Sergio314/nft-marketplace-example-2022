import PublicPageLayout from '@/core/layouts/PublicPageLayout';
import {Banner} from './containers/Banner';
import {Info} from './containers/Info';
import {Tabs} from './containers/Tabs';

const CreatorPage = (): JSX.Element => {
  return (
    <PublicPageLayout withoutWrapper>
      <Banner/>
      <Info/>
      <Tabs/>
    </PublicPageLayout>
  );
};

export default CreatorPage;
