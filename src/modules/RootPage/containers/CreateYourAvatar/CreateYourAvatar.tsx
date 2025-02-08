import { useRouter } from 'next/router';

import { paths } from '@/data/paths';
import { Button } from '@/shared/components/Button';

import styles from "./CreateYourAvatar.module.scss";

export const CreateYourAvatar = () => {
  const router = useRouter();

  const handleButton = () => router.push(paths.createAvatar);

  return (
    <div className={styles.createNFT}>
      <div className={styles.createNFT__content}>
        <div className={styles.createNFT__title}>
          Create your Avatar & Sell your NFT
        </div>
        <div className={styles.createNFT__text}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
          of classical Latin literature from 45 BC, making it over 2000 years old. Richard
          McClintock, a Latin professor at Hampden-Sydney College
        </div>
        <Button
          onClick={handleButton}
          contained
        >
          Create Avatar
        </Button>
      </div>
    </div>
  )
}
