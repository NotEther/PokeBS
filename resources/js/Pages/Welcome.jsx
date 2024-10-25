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
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
            <img
            id="background"
            className="absolute top-0 left-0 w-screen object-cover"
            src="/icons/wallpaper.jpg"
            />

                <div className="relative flex min-h-screen flex-col selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative">
                        <header className="py-5 ">

                        <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
    <img src="/icons/logo.png" className="h-40" />
</div>

                                <nav className="flex flex-1 justify-end mr-4" style={{ gap: "10px" }}>
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
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '80%', // Adjusts width to keep content centered
          maxWidth: '1200px', // Limits max width for better readability on large screens
          gap: '20px',
        }}
      >
        {/* Left Section */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '45%',
            backgroundColor: 'rgba(255, 255, 255, 0.7)', // Half-transparent white background
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '20px', color: '#007bff' }}>Battle-Simulator</h1>
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginBottom: '20px' }}>
            <img
              src="/icons/fight.jpg" // Replace with your image URL
              alt="description"
              style={{ width: '300px', height: '200px', objectFit: 'cover' }}
            />
          </div>
          <p style={{ fontSize: '18px', color: 'black', marginBottom: '20px', textAlign: 'center' }}>
            This is some descriptive text on the left.
          </p>
          <a
            href="https://example.com"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px 20px',
              fontSize: '16px',
              color: 'white',
              backgroundColor: '#007bff',
              textDecoration: 'none',
              borderRadius: '5px',
            }}
          >
            Click Me
          </a>
        </div>

        {/* Right Section */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '45%',
            backgroundColor: 'rgba(255, 255, 255, 0.7)', // Half-transparent white background
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '20px', color: '#FF2D20' }}>Team Builder</h1>
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginBottom: '20px' }}>
            <img
              src="/icons/team.jpg" // Replace with your image URL
              alt="description"
              style={{ width: '300px', height: '200px', objectFit: 'cover' }}
            />
          </div>
          <p style={{ fontSize: '18px', color: 'black', marginBottom: '20px', textAlign: 'center' }}>
            Create your own team and become the champion!
          </p>
          <a
            href="https://example.com"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px 20px',
              fontSize: '16px',
              color: 'white',
              backgroundColor: '#FF2D20',
              textDecoration: 'none',
              borderRadius: '5px',
            }}
          >
            Click Me
          </a>
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
