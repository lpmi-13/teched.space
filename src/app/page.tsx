export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex flex-col">
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
            >
                Skip to main content
            </a>

            <main id="main-content" className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="max-w-4xl mx-auto text-center">
                    <header className="mb-8 sm:mb-12">
                        <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 tracking-tight leading-tight">
                            TechEd<span className="text-blue-600 dark:text-blue-400">.space</span>
                        </h1>
                        <div className="w-16 sm:w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6 sm:mb-8"></div>
                    </header>

                    <section className="mb-8 sm:mb-12">
                        <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-light text-gray-700 dark:text-gray-300 mb-6 leading-relaxed px-2 sm:px-0">
                            Empowering developers and tech professionals with cutting-edge education
                        </h2>
                    </section>
                </div>
            </main>

            <footer className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        &copy; {new Date().getFullYear()} TechEd.space. Transforming tech education, one developer at a time.
                    </p>
                </div>
            </footer>
        </div>
    );
}
