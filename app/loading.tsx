export default function Loading() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16 animate-pulse">
        <div className="h-16 bg-gray-700 rounded w-64 mx-auto mb-6"></div>
        <div className="h-6 bg-gray-700 rounded w-96 mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-gray-800 rounded-lg p-6 border border-gray-700 animate-pulse">
            <div className="h-6 bg-gray-700 rounded w-24 mb-4"></div>
            <div className="h-8 bg-gray-700 rounded w-3/4 mb-2"></div>
            <div className="h-20 bg-gray-700 rounded mb-4"></div>
            <div className="h-4 bg-gray-700 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    </main>
  )
}





