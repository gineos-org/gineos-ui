import { Anek_Devanagari, Fira_Code, Fira_Sans, Inter } from 'next/font/google';
import localFont from 'next/font/local';

const anekDevanagari = Anek_Devanagari({
  subsets: ['latin'],
  display: 'swap',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-anek-devanagari',
});

const clashDisplay = localFont({
  src: [
    {
      path: '../fonts/clash-display/ClashDisplay-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/clash-display/ClashDisplay-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/clash-display/ClashDisplay-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/clash-display/ClashDisplay-Semibold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/clash-display/ClashDisplay-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-fira-code',
});

const firaSans = Fira_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-fira-sans',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
});

export default {
  anekDevanagari,
  clashDisplay,
  firaCode,
  firaSans,
  inter,
} as const;
