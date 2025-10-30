export default function Loading() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-700 rounded w-48 mb-8"></div>
        <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
          <div className="space-y-4">
            <div className="h-12 bg-gray-700 rounded w-3/4"></div>
            <div className="h-4 bg-gray-700 rounded w-1/2"></div>
            <div className="h-4 bg-gray-700 rounded"></div>
            <div className="h-4 bg-gray-700 rounded"></div>
            <div className="h-4 bg-gray-700 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  )
}





