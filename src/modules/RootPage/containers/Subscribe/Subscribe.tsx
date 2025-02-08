import { Button } from '@/shared/components/Button';
import styles from './Subscribe.module.scss';

export const Subscribe = () => (
  <div className={styles.subscribe}>
    <div className={styles.subscribe__content}>
      <h2 className={styles.subscribe__title}>Subscribe Now!</h2>
      <p className={styles.subscribe__text}>Subscribe to get more cool features.</p>
      <Button contained>
        Go to subscription
      </Button>
    </div>
  </div>
)