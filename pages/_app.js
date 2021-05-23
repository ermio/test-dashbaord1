import '../styles/globals.scss';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        titleTemplate='%s - Basis Cash Explained'
        defaultTitle='Basis Cash - A guide for beginners'
        description='If you’re new to Basis Cash and curious to learn more, you’ve come to the right place. In just a few quick lessons, you’ll learn all the basics.'
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://basiscash.fyi',
          title: 'Basis Cash - A guide for beginners',
          description:
            'If you’re new to Basis Cash and curious to learn more, you’ve come to the right place. In just a few quick lessons, you’ll learn all the basics.',
          site_name: 'Basis Cash',
          images: [
            {
              url: 'https://basiscash.fyi/images/twitter.png',
              width: 1200,
              height: 630,
              alt: 'Basis Cash - A guide for beginners',
            },
          ],
        }}
        twitter={{
          handle: '@dafacto',
          site: '@dafacto',
          cardType: 'summary_large_image',
        }}
      />
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
