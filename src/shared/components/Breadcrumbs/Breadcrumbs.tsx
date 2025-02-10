import Link from 'next/link';
import {ParsedUrlQueryInput} from 'querystring';
import {Breadcrumbs as MuiBreadcrumbs, Typography} from '@mui/material';

import styles from './Breadcrumbs.module.scss';

interface ItemProps {
  name: string;
  href: string;
  query?: ParsedUrlQueryInput;
}

interface BreadcrumbsProps {
  items: ItemProps[]
}

export const Breadcrumbs = ({items}: BreadcrumbsProps): JSX.Element => {
  return (
    <MuiBreadcrumbs aria-label='breadcrumb' className={styles.breadcrumbs}>
      {items.map((item, index) => {
        if (items.length === index + 1) {
          return (
            <Typography key={index}>{item.name}</Typography>
          );
        }

        return (
          <Link href={{pathname: item.href, query: item.query}} key={index}>
            {/* <a> */}
              {item.name}
            {/* </a> */}
          </Link>
        );
      })}
    </MuiBreadcrumbs>
  );
};
