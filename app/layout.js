import { Chivo } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const chivo = Chivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-chivo",
});

export const metadata = {
  title: "Classic Games",
  description: "",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={chivo.variable}>
        <header className="bg-gray-900 text-white py-4 px-6 md:px-8">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold" prefetch={false}>
              Classic Games
            </Link>
            <nav className="hidden md:flex items-center space-x-4">
              <Link href="/" className="hover:text-gray-300" prefetch={false}>
                Home
              </Link>
              <Link href="/pages/games" className="hover:text-gray-300" prefetch={false}>
                Games
              </Link>
              <Link href="/pages/leaderboard/" className="hover:text-gray-300" prefetch={false}>
                Leaderboard
              </Link>
              <Link href="/pages/about" className="hover:text-gray-300" prefetch={false}>
                About
              </Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <p>&copy; 2024 Classic Games. All rights reserved.</p>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
      </body>
    </html>
  );
}
