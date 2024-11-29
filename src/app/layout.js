import "./globals.css";
import { Kanit } from "next/font/google";

const kanit = Kanit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-kanit",
});

export const metadata = {
  title: "The Ragnarok Calculator",
  description: "Calculator & Tips",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${kanit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
