import { Box } from '@mui/material';
import { Wrapper } from "@/core/components/Wrapper"

import styles from './VenuesList.module.scss';
import { VenueCard } from '@/shared/components/VenueCard';

import VenueCardImg from "@/resources/images/home-page-venue-card.png";


export const VenuesList = () => {

  return (
    <Wrapper>
      <Box className={styles.venuesList}>
        {
          new Array(8).fill(null).map((el, index) => (
            <VenueCard
              key={index}
              imgPath={VenueCardImg.src}
              title="The Lighting of Love"
            />
          ))
        }
      </Box>
    </Wrapper>
  )
}