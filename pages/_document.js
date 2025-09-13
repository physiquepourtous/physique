import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="fr" data-state="loading">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#a51c30" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link rel="apple-touch-icon" href="/images/favicon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script dangerouslySetInnerHTML={{
            __html: `
              // Éviter le FOUC (Flash Of Unstyled Content)
              document.documentElement.setAttribute('data-state', 'loaded');
            `
          }} />
        </body>
      </Html>
    );
  }
}

export default MyDocument;