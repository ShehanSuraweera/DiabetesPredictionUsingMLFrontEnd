import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const roboto = Roboto({
  weight: ["400", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Diabetes Detection Using Machine Learning",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
