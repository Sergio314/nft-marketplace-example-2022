import { Box, Typography } from '@mui/material';
import { Wrapper } from '@/core/components/Wrapper';

import styles from './About.module.scss';

const About = (): JSX.Element => {
  return (
    <Wrapper>
      <Box className={styles.about}>
        <Typography className={styles.about__title} variant="h4">
          Text
        </Typography>
        <Typography className={styles.about__description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Et corrupti, velit omnis eius aut neque saepe cumque consequuntur sunt amet, consequatur ducimus at nostrum aspernatur voluptate culpa fuga nulla. 
          Hic.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Typography>
      </Box>
    </Wrapper>
  );
};

export default About;
