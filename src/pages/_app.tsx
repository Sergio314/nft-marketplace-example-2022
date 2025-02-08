import { App } from '@/core';
import { Loader } from '@/shared/components/Loader';

import '@/core/styles/index.scss';
import 'swiper/css';

const MyApp = (props) => (
  <>
    <Loader />
    <App {...props} />
  </>
);

export default MyApp;
