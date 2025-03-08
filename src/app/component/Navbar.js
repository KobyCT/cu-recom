import Link from 'next/link';

export default function NavItem({shop =false, favorites = false, profile = false,home = false}) {
    let sM,fM,pM,hM;
    if (shop) { sM = "text-pink-500"; } else { sM = "text-gray-400"; }
    if (favorites) { fM = "text-pink-500"; } else { fM = "text-gray-400"; }
    if (profile) { pM = "text-pink-500"; } else { pM = "text-gray-400"; }
    if (home) { hM = "text-pink-500"; } else { hM = "text-gray-400"; }
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
    <div className="container mx-auto flex justify-evenly items-center py-2">
      <Link href="/" className={`flex flex-col items-center ${hM}`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        <span className="text-xs">Home</span>
      </Link>
  
      <Link href="/shop" className={`flex flex-col items-center ${sM}`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        <span className="text-xs">Shop</span>
      </Link>
  
      <div className="flex flex-col items-center">
        <button className="h-14 w-14 bg-pink-500 rounded-full flex items-center justify-center -mt-5 text-white shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>
      </div>
  
      <Link href="/favorites" className={`flex flex-col items-center ${fM}`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        <span className="text-xs">Favorites</span>
      </Link>
  
      <Link href="/profile" className={`flex flex-col items-center ${pM}`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        <span className="text-xs">Profile</span>
      </Link>
    </div>
  </div>
    );
  }