import * as React from 'react';
import PublicPageLayout from '@/core/layouts/PublicPageLayout';
import { CreateAvatarForm } from '@/modules/CreateAvatarPage';

export const CreateAvatarPage = (): JSX.Element => (
    <PublicPageLayout withoutWrapper>
      {/* Back to Avatar Breadcrumbs link */}
      {/* Create your Avatar text*/}
      <CreateAvatarForm />
      {/* conditional render after create Avatar */}
    </PublicPageLayout>
  );

export default CreateAvatarPage;
