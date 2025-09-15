export default function Home() {
    const copyRight =
        String.fromCharCode(0x00a9) +
        ' TechEd Space Ltd ' +
        new Date().getFullYear();
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex flex-col">
            <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="mb-8">
                        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
                            TechEd
                            <span className="text-blue-600 dark:text-blue-400">
                                .space
                            </span>
                        </h1>
                        <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                        Empowering developers and tech professionals with
                        cutting-edge education
                    </h2>
                </div>
            </main>

            <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {copyRight}. Transforming tech education, one developer
                        at a time.
                    </p>
                </div>
            </footer>
        </div>
    );
}
