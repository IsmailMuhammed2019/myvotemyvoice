import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import '../styles/css/global.css';            // Custom global CSS
import '../styles/css/index.css';            // Your custom styles
import { useEffect } from 'react';
import Script from 'next/script';
import Head from 'next/head';  // Import Head from next/head
// pages/_app.js
import '@fortawesome/fontawesome-free/css/all.min.css';


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Optional: You can add your custom JavaScript initialization here
  }, []);

  return (
    <>
      {/* Add necessary global meta tags */}
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>MyVoteMyVoice - Civic Engagement Platform</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Titan+One&display=swap" rel="stylesheet" />
      </Head>

      {/* Include Bootstrap JS after page load */}
      <Script src="/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
      
      {/* Main Component */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
