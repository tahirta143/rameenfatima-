import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '../components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rameen Fatima - Graphic Designer Portfolio | Amazon Product & Shopify Designer',
  description:
    'Official portfolio of Rameen Fatima, professional Graphic Designer with 1.5+ years of experience specializing in Amazon product listing images, Shopify store design, posters, logos, and WordPress website design.',
  keywords: [
    'Rameen Fatima',
    'Graphic Designer',
    'Amazon Listing Image',
    'Product Designer',
    'Shopify Store Designer',
    'Poster Designer',
    'Logo Designer',
    'WordPress Website Design',
    'The Leaders Hall',
  ],
  icons: {
    icon: '/images/rameen-avatar.jpg',
    shortcut: '/images/rameen-avatar.jpg',
    apple: '/images/rameen-avatar.jpg',
  },
  openGraph: {
    title: 'Rameen Fatima - Graphic Designer Portfolio',
    description: 'Specializing in Amazon Listing Images, Shopify Store Design, Logos & Graphics.',
    images: [{ url: '/images/rameen-avatar.jpg' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${inter.className} bg-[#0b0f19] text-slate-100 antialiased selection:bg-brand-500 selection:text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
