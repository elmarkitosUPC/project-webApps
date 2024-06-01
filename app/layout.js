import { Chivo } from "next/font/google";
import "./globals.css";

const chivo = Chivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-chivo",
});

export const metadata = {
  title: "Cositas",
  description: "Tu mami",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={chivo.variable}>{children}</body>
    </html>
  );
}
