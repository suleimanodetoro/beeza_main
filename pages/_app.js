import React from 'react';
import {Layout} from '../components/';
import 'tailwindcss/tailwind.css'

import '../styles/globals.scss';
Layout
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;