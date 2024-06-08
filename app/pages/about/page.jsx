export default function About() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <main className="flex-1 container mx-auto py-12 px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">About Classic Games</h2>
            <p className="text-gray-700 mb-6">
            Classic Games is a website dedicated to lovers of classic games like Minesweeper and Tic Tac Toe. Here
              you can enjoy these timeless games, with a modern and responsive design, so you can
              play from any device.
            </p>
            <p className="text-gray-700 mb-6">
              Our goal is to provide an exciting and nostalgic gaming experience, while
              maintaining a focus on quality and accessibility.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">About the Creator</h2>
            <div className="flex items-center mb-4">
              <img src="/photos/photo-profile.jpg" alt="Creator's photo" width={80} height={80} className="rounded-full mr-4" />
              <div>
                <h3 className="text-xl font-bold text-gray-900">Marc Torres</h3>
                <p className="text-gray-700">
                  Web developer and passionate about classic games
                </p>
              </div>
            </div>
            <p className="text-gray-700 mb-6">
              I'm a web developer with a great passion for classic games. Since I was a child, I have enjoyed
              playing Minesweeper and Tic Tac Toe, and I have always wanted to share that experience with others.
            </p>
            <p className="text-gray-700 mb-6">
              With Classic Games, I have created a platform where lovers of these games can come to play,
              relax, and enjoy a nostalgic experience. I hope you enjoy your time here and have as much fun
              as I do creating this site.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
