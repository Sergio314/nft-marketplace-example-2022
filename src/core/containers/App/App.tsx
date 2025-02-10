import { NextPage } from 'next';
import Head from 'next/head';
import { AppProps as NativeAppProps } from 'next/app';
import { CacheProvider, EmotionCache, ThemeProvider } from '@emotion/react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
// import { SessionProvider } from 'next-auth/react';

import { mainTheme } from '@/core/theme';
import createEmotionCache from '@/core/utils/createEmotionCache';
import { persistor, store } from '@/core/store';
import { NotificationContainer } from '@/shared/components/Notify/Notify';

import favicon from '@/resources/favicon/favicon.png';

interface AppProps extends NativeAppProps {
  emotionCache: EmotionCache;
}

export const App: NextPage<AppProps> = (props) => {
  const { Component, emotionCache = createEmotionCache(), pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <NotificationContainer />
      <Head>
        <link rel="shortcut icon" href={favicon.src} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="NFT Marketplace example" />
        <title>NFT Marketplace example</title>
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {/* <SessionProvider session={pageProps.session}> */}
            <ThemeProvider theme={mainTheme}>
              <Component {...pageProps} />
            </ThemeProvider>
          {/* </SessionProvider> */}
        </PersistGate>
      </Provider>
    </CacheProvider>
  );
};
