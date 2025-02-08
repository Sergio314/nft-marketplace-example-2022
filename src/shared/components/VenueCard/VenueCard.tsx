import { useRouter } from 'next/router';
import { Box, IconButton } from '@mui/material';
import { paths } from '@/data/paths';
import PlayIcon from '@/resources/icons/play.svg';

import styles from './VenueCard.module.scss';

interface VenueCardProps {
  title: string;
  imgPath: string;
}

export const VenueCard = ({ title, imgPath }: VenueCardProps): JSX.Element => {
  const router = useRouter();

  const clickHandler = () => router.push(paths.venue);

  const playHandler = (event: React.SyntheticEvent) => {
    event.stopPropagation();
  };

  return (
    <Box className={styles.card} onClick={clickHandler}>
      <div className={styles.card__image}>
        <img src={imgPath} alt={title} />
        <IconButton onClick={playHandler} className={styles.card__playBtn}>
          <PlayIcon />
        </IconButton>
      </div>
      <div className={styles.card__title}>{title}</div>
    </Box>
  );
};
