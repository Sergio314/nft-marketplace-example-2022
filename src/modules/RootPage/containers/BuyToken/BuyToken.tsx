import { Button } from '@/shared/components/Button';
import styles from './BuyToken.module.scss';

export const BuyToken = () => (
  <div className={styles.buyToken}>
    <div className={styles.buyToken__content}>
      <h2 className={styles.buyToken__title}>Buy this token!</h2>
      <p className={styles.buyToken__text}>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
        in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
        Richard McClintock, a Latin professor at Hampden-Sydney College
      </p>
      <Button contained>Buy Token</Button>
    </div>
  </div>
)