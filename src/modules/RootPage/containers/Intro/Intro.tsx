import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import { paths } from '@/data/paths';
import { Button } from '@/shared/components/Button';
import styles from './Intro.module.scss';

export const Intro = () => {
    const router = useRouter()

    const handleButton = () => router.push(paths.nftListings)

    return (
        <Box className={styles.intro}>
            <Box className={styles.intro__content}>
                <Box className={styles.intro__title}>
                    Discover, collect, and sell extraordinary NFTs
                </Box>
                <Box className={styles.intro__text}>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                    of classical Latin literature from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the
                    more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the
                    cites of the word
                </Box>
                <Box className={styles.intro__buttonOuter}>
                    <Button
                        onClick={handleButton}
                        contained
                    >
                        Go to listing NFT
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};
