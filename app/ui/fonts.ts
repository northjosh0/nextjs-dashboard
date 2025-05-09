import exp from 'constants';
import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
  preload: true,
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  adjustFontFallback: true,
});

export const lusitana = Lusitana({
  subsets: ['latin'],
  variable: '--font-lusitana',
  display: 'swap',
  fallback: ['system-ui', 'serif'], 
  weight : [ '400',  '700'],

});