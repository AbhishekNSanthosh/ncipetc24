/**
 * © NCIPETC-24 2024. All rights reserved.
 *
 * This code is the property of NCIPETC-24 and is protected by copyright law.
 * Unauthorized use, reproduction, or distribution is strictly prohibited.
 *
 * @author Abhishek Santhosh
 */

import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@widgets/Navbar";
import "@styles/main.scss";
import Footer from "@widgets/Footer";
import styles from '@styles/scss/home.module.scss'
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react"

const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "NCIPETC-24",
  description: "Empowering Minds, Bridging Horizons: Unveiling the Future at the National Conference on Interdisciplinary Perspectives of Emerging Trends in Computing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/clogo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <Toaster position="bottom-center" />
        <div className={styles.homeContainer}>
          {children}
          <Analytics/>
        </div>
        <Footer />
      </body>
    </html>
  );
}
