import Link from 'next/link';
import { paths } from '@/data/paths';
import { cards } from './constants';

import styles from './Explore.module.scss';

export const Explore = () => (
  <div className={styles.explore}>
    <div className={styles.explore__title}>Explore by category</div>
    <div className={styles.explore__cards}>
      {
        cards.map((el, key) => (
          <div key={key} className={styles.explore__card}>
            <img className={styles.explore__card__image} src={el.img} alt={el.title} />
            <Link className={styles.explore__card__link} href={paths.venues}>
              {/* <a> */}
                {el.title}
              {/* </a> */}
            </Link>
          </div>
        ))
      }
    </div>
  </div>
)
