import { useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Box } from '@mui/material';

import { Dropdown, DropdownRef } from '@/core/components/Dropdown';
import { mainNavigation } from '@/data/mainNavigation';
import { Search } from '@/core/components/Search';
import { Notifications } from '@/core/components/Notifications';
import { Button } from '@/shared/components/Button';
import { Account } from '@/core/components/Account';
import { useTypedSelector } from '@/core/hooks/useTypedSelector';
import { paths } from '@/data/paths';

import LogoImage from '@/resources/images/logo.svg';
import MobileMenuIcon from '@/resources/icons/mobile-menu-icon.svg';

import styles from './Header.module.scss';

export const Header = () => {
  const router = useRouter();
  const dropdownRef = useRef<DropdownRef | null>(null);
  const { user, isLoading } = useTypedSelector(({ authReducer }) => authReducer);

  const handleSignInClick = () => router.push(paths.login);
  const handleMobileMenuClick = (event) => {
    dropdownRef.current?.openMenu(event);
  };
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
          <Box className={styles.header__inner_mobile_icon}>
            <MobileMenuIcon onClick={handleMobileMenuClick} />
          </Box>
          <nav className={styles.header__inner_mobile_nav}>
            {Object.keys(mainNavigation).map((title, index) => (
              <Dropdown ref={dropdownRef} key={index} title='' options={mainNavigation[title]} />
            ))}
          </nav>
        </Box>
      </header>
      <div className={styles.header__height} />
    </>
  );
};
