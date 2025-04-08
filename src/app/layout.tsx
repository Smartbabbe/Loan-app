import type { Metadata } from 'next';
import { Mulish } from "next/font/google";
import './globals.css';


const mulish = Mulish({ 
  subsets: ["latin"],
  weight: ["300", "400", "700", "800"]
});

export const metadata: Metadata = {
  title: 'A Loan Application App',
  description: 'An app that allows you to fill out an online application to borrow loan',
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;
}>) {
    return (
      <html lang="en">
        <body className={mulish.className}>{children}</body>
      </html>
  );
}