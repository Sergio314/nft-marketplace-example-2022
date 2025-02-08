import {useRouter} from 'next/router';
import {ChangeEvent, useEffect, useRef, useState} from 'react';
import {Box, ClickAwayListener, Grow, Input, InputAdornment, Paper, Popper, Typography} from '@mui/material';

import useDebounce from '@/core/hooks/useDebounce';
import {Spinner} from '@/shared/components/Spinner';

import SearchSvg from '@/resources/icons/search.svg';
import CloseSvg from '@/resources/icons/close-modal-icon.svg';
import Image from '@/resources/images/nft-card-img.png';

import styles from './Search.module.scss';

export const Search = (): JSX.Element => {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce({value});
  const [open, setOpen] = useState<boolean>(false);
  const [focused, setFocused] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const anchorRef = useRef<HTMLDivElement>(null);

  const onEnter = (event: KeyboardEvent) => {
    if (event.key === 'Enter' && value) {
      router.push({pathname: '/search', query: {name: value}});
      setOpen(false);
    }
  };

  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onClickAway = () => {
    if (open) {
      setOpen(false);
    }
  };

  const onFocus = () => {
    setFocused(true);
  };

  const onBlur = () => {
    setFocused(false);
  };

  const onClear = () => {
    setValue('');
  };

  useEffect(() => {
    if (debouncedValue) {
      setLoading(true);
      setTimeout(() => {
        if (debouncedValue === 'Kitten') {
          setOpen(true);
        } else {
          setOpen(false);
        }
        setLoading(false);
      }, 500);
    }
  }, [debouncedValue])

  useEffect(() => {
    inputRef.current.addEventListener('keypress', onEnter);

    return () => {
      if (inputRef.current) {
        inputRef.current.removeEventListener('keypress', onEnter);
      }
    };
  }, [value]);

  return (
    <Box className={`${styles.search} ${focused ? styles.search_focused : ''}`}>
      <Input
        ref={anchorRef}
        value={value}
        onChange={inputChangeHandler}
        inputRef={inputRef}
        className={styles.search__field}
        disableUnderline
        placeholder='Search'
        onFocus={onFocus}
        onBlur={onBlur}
        startAdornment={(
          <InputAdornment
            position='start'
            variant='filled'
            className={styles.search__field_searchIcon}
          >
            <SearchSvg/>
          </InputAdornment>
        )}
        endAdornment={(
          <>
            {loading && (
              <InputAdornment
                position='end'
                children={<Spinner size={14}/>}
              />
            )}
            {value && (
              <InputAdornment
                position='end'
                onClick={onClear}
                children={<CloseSvg/>}
                className={styles.search__field_closeIcon}
              />
            )}
          </>
        )}
      />
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        placement='bottom-end'
        transition
        disablePortal
      >
        {({TransitionProps}) => (
          <ClickAwayListener onClickAway={onClickAway}>
            <Grow {...TransitionProps}>
              <Paper className={styles.search__menu}>
                {Array.from(Array(4).keys()).map((index) => (
                  <Box className={styles.search__menu__item} key={index}>
                    <img src={Image.src} alt='image'/>
                    <div className={styles.search__menu__item_column}>
                      <Typography
                        variant='h6'
                        children='Lazy cats'
                        className={styles.search__menu__item_title}
                      />
                      <div className={styles.search__menu__item_subtitle}>
                        BY <span>@calvinlane</span>
                      </div>
                    </div>
                    <div className={styles.search__menu__item_view}>
                      View Details
                    </div>
                  </Box>
                ))}
                <div className={styles.search__menu__description}>
                  Press Enter to the search all item
                </div>
              </Paper>
            </Grow>
          </ClickAwayListener>
        )}
      </Popper>
    </Box>
  );
};
