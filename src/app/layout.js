import { Inter } from "next/font/google";
import Navbar from "@widgets/Navbar";
import "@styles/main.scss";
import Footer from "@widgets/Footer";
import styles from '@styles/scss/home.module.scss'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NCIPETC'24",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      </head>
      <body className={inter.className}>
        <Navbar />
        <div className={styles.homeContainer}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
