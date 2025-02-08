import CheckCircle from '@/resources/icons/circle-check-gradient.svg';

import styles from './Avatar.module.scss';

interface AvatarProps {
  src: string;
}

export const Avatar = ({src}: AvatarProps): JSX.Element => {
  return (
    <div className={styles.avatar}>
      <img src={src} alt="avatar-img"/>
      <CheckCircle/>
    </div>
  );
};