import {Box, Typography} from '@mui/material';

import {Wrapper} from '@/core/components/Wrapper';

import NotFoundImg from '@/resources/images/not-found.png';

import styles from './NotFound.module.scss';

interface NotFoundProps {
  name: any;
}

export const NotFound = ({name}: NotFoundProps): JSX.Element => {
  return (
    <Wrapper>
      <Box className={styles.notFound}>
        <Typography
          variant='h4'
          className={styles.notFound__title}
          children={`We’re sorry, we couldn’t find results for your search: \n“${name}”`}
        />
        <img
          className={styles.notFound__image}
          src={NotFoundImg.src}
          alt='not-found-image'
        />
      </Box>
    </Wrapper>
  );
};
