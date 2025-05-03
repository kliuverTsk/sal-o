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
