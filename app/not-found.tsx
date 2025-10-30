import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-cyber-blue mb-4">404</h1>
        <h2 className="text-3xl font-bold text-cyber-green mb-6">
          Δεν βρέθηκε το άρθρο
        </h2>
        <p className="text-gray-400 mb-8 text-lg">
          Το άρθρο που αναζητάτε δεν υπάρχει.
        </p>
        <Link 
          href="/" 
          className="inline-block px-6 py-3 bg-cyber-blue hover:bg-cyber-green text-white rounded-lg transition-colors font-semibold"
        >
          Επιστροφή στην αρχική σελίδα
        </Link>
      </div>
    </div>
  )
}





