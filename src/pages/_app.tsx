// pages/_app.tsx
import '@/styles/globals.css'; // Path to your global CSS file
import type { AppProps } from 'next/app';
import { AuthProvider } from '../contexts/authContext'

function MyApp({ Component, pageProps }: AppProps) {
  // Wrap the Component with layout here if you have a common layout component
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp;
