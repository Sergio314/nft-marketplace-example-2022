import {Box, IconButton} from '@mui/material';

import {Button} from '@/shared/components/Button';

import PlayIcon from '@/resources/icons/play.svg';

import styles from './NFTCard.module.scss';

export interface NFTCardProps {
  name: string;
  price: number | string;
  img: string;
  onCardClick?: React.MouseEventHandler<HTMLDivElement>;
  onBuy: Function;
  isAdaptive?: boolean;
}

export const NFTCard = (props: NFTCardProps): JSX.Element => {
  const {
    name,
    price,
    img,
    onCardClick,
    onBuy,
    isAdaptive
  } = props;

  const buyHandler = (event: React.SyntheticEvent) => {
    event.stopPropagation();
    onBuy();
  };

  const playHandler = (event: React.SyntheticEvent) => {
    event.stopPropagation();
  };

  return (
    <Box
      onClick={onCardClick}
      className={`${styles.nftCard} ${isAdaptive ? styles.adaptive : ''}`}
    >
      <div className={styles.nftCard__body}>
        <div className={styles.nftCard__image}>
          <img src={img} alt={name}/>
          <IconButton
            onClick={playHandler}
            className={styles.nftCard__playBtn}
          >
            <PlayIcon/>
          </IconButton>
        </div>
        <h3 className={styles.nftCard__title}>{name}</h3>
        <div className={styles.nftCard__action}>
          <div className={styles.nftCard__priceColumn}>
            <div className={styles.nftCard__priceColumn__title}>Price</div>
            <div className={styles.nftCard__priceColumn__value}>{price} VR</div>
          </div>
          <Button
            onClick={buyHandler}
            className={styles.nftCard__buyBtn}
          >
            Buy now
          </Button>
        </div>
      </div>
    </Box>
  );
};
