import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata = {
  title: "Fabulosa & Glamurosa | Salão de Beleza",
  description: "Transforme seu visual em nosso salão de beleza premium.",
  metadataBase: new URL('https://kliuvertsk.github.io'),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://kliuvertsk.github.io/sal-o/',
    siteName: 'Fabulosa & Glamurosa',
    title: "Fabulosa & Glamurosa | Salão de Beleza",
    description: "Transforme seu visual em nosso salão de beleza premium.",
    images: [{
      url: 'https://kliuvertsk.github.io/sal-o/elegant.png', // URL absoluta
      width: 1200,
      height: 630,
      alt: 'Fabulosa & Glamurosa Salão de Beleza'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Fabulosa & Glamurosa | Salão de Beleza",
    description: "Transforme seu visual em nosso salão de beleza premium.",
    images: ['https://kliuvertsk.github.io/sal-o/elegant.png'], // URL absoluta
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.className} antialiased overflow-x-hidden`}>
        <div className="min-h-screen bg-white">
          {children}
        </div>
      </body>
    </html>
  );
}
