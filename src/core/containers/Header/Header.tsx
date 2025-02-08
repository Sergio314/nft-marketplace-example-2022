import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Header.module.scss';

import { paths } from '@/data/paths';
import LogoImage from '@/resources/images/logo.svg';

import { Box } from '@mui/material';
import { Dropdown } from '@/core/components/Dropdown';
import { mainNavigation } from '@/data/mainNavigation';
import { Search } from '@/core/components/Search';
import { Notifications } from '@/core/components/Notifications';
import { Button } from '@/shared/components/Button';
import { Account } from '@/core/components/Account';

import MobileMenuIcon from '@/resources/icons/mobile-menu-icon.svg';
import { useTypedSelector } from '@/core/hooks/useTypedSelector';

export const Header = () => {
  const router = useRouter()
  const { user, isLoading } = useTypedSelector(({ authReducer }) => authReducer);

  const handleSignInClick = () => router.push(paths.login);

  return (
    <>
      <header className={styles.header}>
        <Box className={styles.header__inner}>
          <Link href="/">
            <Box className={styles.header__inner_logo}>
              <LogoImage/>
            </Box>
          </Link>
          <nav className={styles.header__inner_nav}>
            {Object.keys(mainNavigation).map((title, index) => (
              <Dropdown key={index} title={title} options={mainNavigation[title]} />
            ))}
          </nav>
          <Box className={styles.header__inner_search}>
            <Search />
          </Box>
          {!isLoading && (
            !user ? (
              <Button className={styles.header__inner_signIn} onClick={handleSignInClick}>
                Sign in
              </Button>
            ) : (
              <>
                <div className={styles.header__inner_notifications}>
                  <Notifications />
                </div>
                <Account />
              </>
            )
          )}
          <Box className={styles.header__inner_mobile_search}>

          </Box>
          <Box className={styles.header__inner_mobile_icon}>
            <MobileMenuIcon />
          </Box>
        </Box>
      </header>
      <div className={styles.header__height} />
    </>
  );
};
