import { loadUsers } from "@/lib/users";

export default async function Leaderboard_Minesweeper() {
    const users = await loadUsers(10);

    const generateRandomTime = () => {
        const minutes = Math.floor(Math.random() * 3); // 0-2 minutos
        const seconds = Math.floor(Math.random() * 60); // 0-59 segundos
        const milliseconds = Math.floor(Math.random() * 100); // 0-99 milisegundos
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}.${milliseconds}`;
    };
    
    const formatDate = (dateString) => {
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-GB', options);
    };    

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1 bg-white white:bg-gray-900 py-12">
                <div className="container mx-auto">
                    <div className="space-y-6">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-black">Global Minesweeper Leaderboard</h2>
                            <p className="text-gray-500 dark:text-gray-400 mt-2">Discover the best Minesweeper players worldwide.</p>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left bg-gray-900 dark:bg-gray-50 rounded-lg shadow-md">
                                <thead className="bg-gray-800 dark:bg-gray-100 rounded-t-lg">
                                    <tr>
                                        <th className="px-6 py-3 font-medium text-white dark:text-gray-900">Player</th>
                                        <th className="px-6 py-3 font-medium text-white dark:text-gray-900">Country</th>
                                        <th className="px-6 py-3 font-medium text-white dark:text-gray-900">Record Time</th>
                                        <th className="px-6 py-3 font-medium text-white dark:text-gray-900">Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user) => (
                                        
                                        <tr className="border-b dark:border-gray-600 hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors duration-300">
                                            <td className="px-6 py-4 font-medium text-white dark:text-gray-900">{user.name.first} {user.name.last}</td>
                                            <td className="px-6 py-4 text-white dark:text-gray-900">{user.location.country}</td>
                                            <td className="px-6 py-4 text-white dark:text-gray-900">{generateRandomTime()}</td>
                                            <td className="px-6 py-4 text-white dark:text-gray-900">{formatDate(user.registered.date)}</td> 
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}