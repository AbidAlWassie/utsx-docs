import type { AppProps } from 'next/app';
import '../src/styles/globals.css';
// import '../src/styles/styles.css';

export default function Main({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}