import PublicPageLayout from "@/core/layouts/PublicPageLayout"
import { Box } from "@mui/material";
import { Intro } from "./containers/Intro";
import { LatestNFT } from "./containers/LatestNFT";

import styles from "./RootPage.module.scss";
import { CreateYourAvatar } from './containers/CreateYourAvatar';
import { Venue } from './containers/Venue/Venue';
import { BuyToken } from "./containers/BuyToken";
import { Subscribe } from "./containers/Subscribe/Subscribe";
import { Explore } from "./containers/Explore";
import { Support } from "./containers/Support";


export const RootPage: React.FC = () => (
    <Box className={styles.homePage}>
        <PublicPageLayout>
            <Intro />
            <LatestNFT />
            <CreateYourAvatar />
            <Venue />
            <BuyToken />
            <Explore />
            <Subscribe />
            <Support />
        </PublicPageLayout>
    </Box>
)
