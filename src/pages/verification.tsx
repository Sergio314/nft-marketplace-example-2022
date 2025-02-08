import * as React from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { notify } from '@/shared/components/Notify/Notify';
import { actionVerifyEmail } from '@/modules/Auth/actions';
import { paths } from '@/data/paths';

export const Verify = (): JSX.Element => {
  const router = useRouter();
  const { token } = router.query;

  useEffect(() => {
    if (token) {
      actionVerifyEmail(token as string, async (status: boolean) => {
        if (status) {
          await router.replace(paths.login);
          notify.success('You successfully verified your email');
        }
      });
    }
  }, [token]);
  return <></>;
};

export default Verify;
