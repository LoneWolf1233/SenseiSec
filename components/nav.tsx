import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="border-b border-gray-800 bg-gray-900/50 backdrop-blur sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-cyber-green">
            SenseiSec
          </Link>
          
          <div className="flex gap-6">
            <Link 
              href="/writeups" 
              className="text-gray-300 hover:text-cyber-green transition-colors"
            >
              Άρθρα
            </Link>
            <Link 
              href="/tools" 
              className="text-gray-300 hover:text-cyber-green transition-colors"
            >
              Εργαλεία
            </Link>
            <Link 
              href="/about" 
              className="text-gray-300 hover:text-cyber-green transition-colors"
            >
              Σχετικά
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}


