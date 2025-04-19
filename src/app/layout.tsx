// app/layout.tsx
import "./globals.css";
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-montserrat", // importante
});

export const metadata = {
  title: "Tesla",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className}>

      <body>{children}</body>
    </html>
  );
}
