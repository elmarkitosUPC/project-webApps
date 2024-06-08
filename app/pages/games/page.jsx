import Link from "next/link"
import Image from 'next/image';

export default function Page_Games() {
    return (
        <div className="flex flex-col min-h-screen">
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
        </div >
    )
}