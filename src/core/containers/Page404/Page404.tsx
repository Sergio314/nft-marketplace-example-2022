import { useRouter } from 'next/router';

import Page404Img from '../../../resources/images/Page404-robot.png';

import { Button } from '@/shared/components/Button';

import styles from './Page404.module.scss';

export const Page404 = (): JSX.Element => {
  const router = useRouter();

  const homePageHandler = () => {
    router.push('/');
  };

  return (
    <div className={styles.Page404}>
      <div className={styles['Page404__center-block']}>
        <img src={Page404Img.src} alt='not-found'/>
        <h3>Oops, something went wrong. Let's try again.</h3>
        <Button contained onClick={homePageHandler} className={styles['Page404__errButton']}>
          Home Page
        </Button>
      </div>
    </div>
  );
};
export default Page404;
