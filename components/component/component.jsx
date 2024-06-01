/**
 * v0 by Vercel.
 * @see https://v0.dev/t/9M1SkrdEcr3
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-900 text-white py-4 px-6 md:px-8">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="#" className="text-2xl font-bold" prefetch={false}>
            Classic Games
          </Link>
          <nav className="hidden md:flex items-center space-x-4">
            <Link href="#" className="hover:text-gray-300" prefetch={false}>
              Home
            </Link>
            <Link href="#" className="hover:text-gray-300" prefetch={false}>
              Games
            </Link>
            <Link href="#" className="hover:text-gray-300" prefetch={false}>
              Leaderboard
            </Link>
            <Link href="#" className="hover:text-gray-300" prefetch={false}>
              About
            </Link>
          </nav>
          <Button variant="outline" className="md:hidden">
            <MenuIcon className="h-6 w-6" />
          </Button>
        </div>
      </header>
      <main className="flex-1 py-8 px-4 md:px-8">
        <section className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h1 className="text-3xl font-bold mb-4">Welcome to Classic Games</h1>
              <p className="text-gray-600 mb-6">
                Enjoy a variety of classic games like Sudoku and Minesweeper. Challenge your friends and climb the
                leaderboard.
              </p>
              <Link
                href="#"
                className="inline-flex items-center bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800"
                prefetch={false}
              >
                Play Now
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div>
              <img src="/placeholder.svg" alt="Classic Games" width={500} height={300} className="rounded-lg" />
            </div>
          </div>
        </section>
        <section className="container mx-auto mt-12">
          <h2 className="text-2xl font-bold mb-4">Available Games</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <Link href="#" className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow" prefetch={false}>
              <div className="p-4">
                <img src="/placeholder.svg" alt="Sudoku" width={300} height={200} className="rounded-t-lg" />
                <h3 className="text-xl font-bold mt-2">Sudoku</h3>
                <p className="text-gray-600">Test your logic skills.</p>
              </div>
            </Link>
            <Link href="#" className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow" prefetch={false}>
              <div className="p-4">
                <img src="/placeholder.svg" alt="Minesweeper" width={300} height={200} className="rounded-t-lg" />
                <h3 className="text-xl font-bold mt-2">Minesweeper</h3>
                <p className="text-gray-600">Uncover the hidden mines.</p>
              </div>
            </Link>
            <Link href="#" className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow" prefetch={false}>
              <div className="p-4">
                <img src="/placeholder.svg" alt="Chess" width={300} height={200} className="rounded-t-lg" />
                <h3 className="text-xl font-bold mt-2">Chess</h3>
                <p className="text-gray-600">Challenge your strategic skills.</p>
              </div>
            </Link>
            <Link href="#" className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow" prefetch={false}>
              <div className="p-4">
                <img src="/placeholder.svg" alt="Tetris" width={300} height={200} className="rounded-t-lg" />
                <h3 className="text-xl font-bold mt-2">Tetris</h3>
                <p className="text-gray-600">Fit the pieces together.</p>
              </div>
            </Link>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-4 px-6 md:px-8">
        <div className="container mx-auto flex justify-between items-center">
          <p>&copy; 2023 Classic Games. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <Link href="#" className="hover:text-gray-300" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-gray-300" prefetch={false}>
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}