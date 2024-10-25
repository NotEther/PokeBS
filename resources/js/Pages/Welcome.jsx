import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="PokeBS" />
            <div className="relative min-h-screen w-screen">
    <img
        id="background"
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/icons/wallpaper.jpg"
    />

                <div className="relative flex min-h-screen flex-col selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative">
                        <header className="py-5 ">
                            <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                                <img src="/icons/logo.png" className="h-40" />
                            </div>

                            <nav className="fixed top-0 left-0 w-full flex justify-end p-4" style={{ gap: "10px" }}>
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="bg-[#FF2D20] text-white rounded-md px-4 py-2 ring-1 ring-transparent transition hover:bg-[#FF2D20]/80 focus:outline-none focus-visible:ring-[#FF2D20] dark:bg-[#FF2D20] dark:hover:bg-[#FF2D20]/80 dark:focus-visible:ring-white"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="bg-[#FF2D20] text-white rounded-md px-4 py-2 ring-1 ring-transparent transition hover:bg-[#FF2D20]/80 focus:outline-none focus-visible:ring-[#FF2D20] dark:bg-[#FF2D20] dark:hover:bg-[#FF2D20]/80 dark:focus-visible:ring-white"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="bg-[#FF2D20] text-white rounded-md px-4 py-2 ring-1 ring-transparent transition hover:bg-[#FF2D20]/80 focus:outline-none focus-visible:ring-[#FF2D20] dark:bg-[#FF2D20] dark:hover:bg-[#FF2D20]/80 dark:focus-visible:ring-white"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </header>
                                
<main className="mt-6">
    <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh', // Centers vertically by making container full height of the viewport
            padding: '20px',
        }}
    >
        <div className="flex flex-col md:flex-row justify-center items-center min-h-screen p-5">
            <div className="flex flex-col items-center min-w-[300px] min-h-[428px] w-full md:w-1/2 lg:w-2/5 bg-white/70 p-5 rounded-lg shadow-md m-3">
                <h1 className="text-4xl font-bold mb-5 text-blue-500">Battle-Simulator</h1>
                    <img
                        src="/icons/fight.jpg"
                        alt="Battle Simulator"
                        className="w-full h-48 object-cover mb-5"
                    />
                    <p className="text-lg text-black text-center mb-5">
                        This is some descriptive text on the left.
                    </p>
                    {auth.user ? (
                        <a
                            href={route('bs')}
                            className="inline-flex items-center min-w-[100px] justify-center px-6 py-2 text-white bg-blue-500 rounded-md"
                        >
                            Battle
                        </a>
                    ) : (
                        <button
                            disabled
                            className="inline-flex items-center min-w-[100px] justify-center px-6 py-2 text-white bg-blue-500/50 rounded-md cursor-not-allowed"
                            title="You must be logged in to access this feature"
                        >
                            Battle
                        </button>
                    )}
            </div>
            <div className="flex flex-col items-center min-w-[300px] min-h-[400px] w-full md:w-1/2 lg:w-2/5 bg-white/70 p-5 rounded-lg shadow-md m-3">
                <h1 className="text-4xl font-bold mb-5 text-red-600">Team Builder</h1>
                <img
                    src="/icons/team.jpg"
                    alt="Team Builder"
                    className="w-full h-48 object-cover mb-5"
                />
                <p className="text-lg text-black text-center mb-5">
                    Create your own team and become the champion!
                </p>
                {auth.user ? (
                    <a
                        href="https://example.com"
                        className="inline-flex items-center justify-center w-32 h-10 text-white bg-red-600 rounded-md"
                    >
                        Build
                    </a>
                ) : (
                    <button
                        disabled
                        className="inline-flex items-center justify-center w-32 h-10 text-white bg-red-600/50 rounded-md cursor-not-allowed"
                        title="You must be logged in to access this feature"
                    >
                        Build
                    </button>
                    )}
            </div>
        </div>
    </div>    
</main>
                    <footer className="py-16 text-center text-sm text-white/70">
                        PokeBS is a fan-made, non-profit project.<br></br> All Pokémon rights belong to Nintendo, Game Freak, and The Pokémon Company. No affiliation or infringement intended.
                    </footer>
                    </div>
                </div>
            </div>
        </>
    );
}
