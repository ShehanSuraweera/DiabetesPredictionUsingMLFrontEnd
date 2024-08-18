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
  title: "Diabetes Detection Using Machine Learning - University of Kelaniya",
  description:
    "A comprehensive project by Computer Science undergraduates at the University of Kelaniya, leveraging machine learning for early and accurate diabetes detection.",
  keywords:
    "Diabetes detection, machine learning, University of Kelaniya, computer science, undergraduate project, health technology, AI in healthcare",
  author: "Computer Science Undergraduate Group, University of Kelaniya",
  robots: "index, follow",
};

// Move viewport settings to a dedicated export
export const viewport = {
  width: "device-width",
  initialScale: 1,
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
