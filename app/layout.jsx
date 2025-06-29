import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TemuDataku",
  tagline: "Belajar Data Science Langsung Dari Ahlinya",
  description:
    "adalah platform belajar data science yang interaktif dan terstruktur untuk semua kalangan. Pelajari data analysis dengan kurikulum berbasis industri, proyek nyata, dan bimbingan dari mentor berpengalaman. Mulai perjalanan data-mu hari ini bersama TemuDataku!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
