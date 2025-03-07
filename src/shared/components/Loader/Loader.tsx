import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import { Spinner } from '@/shared/components/Spinner';

import styles from './Loader.module.scss';

export const Loader = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
      const handleStart = (url) => (url !== router.asPath) && setLoading(true);
      const handleComplete = () => setLoading(false);

      router.events.on('routeChangeStart', handleStart)
      router.events.on('routeChangeComplete', handleComplete)
      router.events.on('routeChangeError', handleComplete)

      return () => {
          router.events.off('routeChangeStart', handleStart)
          router.events.off('routeChangeComplete', handleComplete)
          router.events.off('routeChangeError', handleComplete)
      }
  }, [])

  return loading && (<div className={styles.loader}><Spinner /></div>);
}
