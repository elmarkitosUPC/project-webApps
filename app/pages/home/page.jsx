import Link from "next/link"
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
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
                href="/pages/games"
                className="inline-flex items-center bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800"
                prefetch={false}
              >
                Play Now
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div>
              <Image
                src="/photos/photo-home.jpg"
                alt="Classic Games"
                width={300}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </section>
        <section className="container mx-auto mt-12">
          <h2 className="text-2xl font-bold mb-4">Available Games</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            <Link href="/pages/games/snake" className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow" prefetch={false}>
              <div className="p-4">
                <Image
                  src="/photos/photo-snake.jpg"
                  alt="snake" width={400} height={200} className="rounded-t-lg" />
                <h3 className="text-xl font-bold mt-2">Snake</h3>
                <p className="text-gray-600">Devour the dots and grow your tail.</p>
              </div>
            </Link>
            <Link href="/pages/games/minesweeper" className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow" prefetch={false}>
              <div className="p-4">
                <Image
                  src="/photos/photo-minesweeper.jpg"
                  alt="Minesweeper" width={400} height={200} className="rounded-t-lg" />
                <h3 className="text-xl font-bold mt-2">Minesweeper</h3>
                <p className="text-gray-600">Uncover the hidden mines.</p>
              </div>
            </Link>
            <Link href="/pages/games/tictactoe" className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow" prefetch={false}>
              <div className="p-4">
                <Image
                  src="/photos/photo-tictactoe.jpg" alt="Tic Tac Toe" width={400} height={200} className="rounded-t-lg" />
                <h3 className="text-xl font-bold mt-2">Tic Tac Toe</h3>
                <p className="text-gray-600">Test your wits.</p>
              </div>
            </Link>
          </div>
        </section>
      </main>
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
